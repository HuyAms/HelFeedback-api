import {User, UserRole, UserStatus} from '../resources/user/user.interface'
import _ from 'lodash'
import UserModel from '../resources/user/user.model'
import createLogger from '../utils/logger'
import {createMockCategory, createMockChannel} from '../tests/utils/mock'
import {addCategory, addChannel} from '../tests/utils/db'
import ChannelModel from '../resources/channel/channel.model'
import CategoryModel from '../resources/category/category.model'

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
	])
}

const createUsers = () => {
	return mockUsers.map(mockUser => UserModel.create(mockUser))
}

const createChannels = () => {
	const mockChannels = _.times(4, () => createMockChannel())

	return mockChannels.map(mockChannel => addChannel(mockChannel))
}

const createCategories = () => {
	const mockCategories = _.times(4, () => createMockCategory())

	return mockCategories.map(mockCategories => addCategory(mockCategories))
}

export const seed = async () => {
	try {
		await cleanDB()

		logger.debug(`Database cleaned`)

		await Promise.all(createUsers())
		await Promise.all(createChannels())
		await Promise.all(createCategories())

		logger.debug(`Database seeded`)
	} catch (e) {
		logger.error('Seed database error: ‰o', e)
	}
}
