import {User, UserRole, UserStatus} from '../resources/user/user.interface'
import _ from 'lodash'
import UserModel from '../resources/user/user.model'
import createLogger from '../utils/logger'
import {
	createMockChannel,
	createMockQuestion,
	createMockSurvey,
} from '../tests/utils/mock'
import {addCategory, addChannel, addSurvey} from '../tests/utils/db'
import ChannelModel from '../resources/channel/channel.model'
import CategoryModel from '../resources/category/category.model'
import SurveyModel from '../resources/survey/survey.model'
import {getCategories} from './realData/readDataUtils'

const logger = createLogger(module)

const mockUser1: User = {
	firstName: 'fName1',
	lastName: 'lName1',
	email: 'user@gmail.com',
	passport: {
		password: '123456',
	},
	role: UserRole.User,
	status: UserStatus.Active,
}

const mockUser2: User = {
	firstName: 'fName2',
	lastName: 'lName2',
	email: 'admin@gmail.com',
	passport: {
		password: '123456',
	},
	role: UserRole.Admin,
	status: UserStatus.Active,
}

const mockUsers = [mockUser1, mockUser2]

const cleanDB = () => {
	return Promise.all([
		UserModel.deleteMany({}),
		ChannelModel.deleteMany({}),
		CategoryModel.deleteMany({}),
		SurveyModel.deleteMany({}),
	])
}

const createUsers = () => {
	return mockUsers.map(mockUser => UserModel.create(mockUser))
}

const createChannels = (surveyId: string) => {
	const mockChannels = _.times(4, () => createMockChannel(surveyId))

	return mockChannels.map(mockChannel => addChannel(mockChannel))
}

const createCategories = () => {
	const mockCategories = getCategories()

	return mockCategories.map(mockCategories => addCategory(mockCategories))
}

const createSurveys = (categoryIds: string[]) => {
	const questions = categoryIds.map(categoryId =>
		createMockQuestion(categoryId),
	)

	const mockSurvey = createMockSurvey(questions)

	return addSurvey(mockSurvey)
}

export const seed = async () => {
	try {
		await cleanDB()

		logger.debug(`Database cleaned`)

		await Promise.all(createUsers())
		const categories = await Promise.all(createCategories())

		const categoryIds = categories.map(category => category.id)

		const createdSurvey = await createSurveys(categoryIds)
		await Promise.all(createChannels(createdSurvey.id))

		logger.debug(`Database seeded`)
	} catch (e) {
		logger.error('Seed database error: ‰o', e)
	}
}
