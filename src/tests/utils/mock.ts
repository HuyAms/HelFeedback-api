import faker from 'faker'
import {User, UserRole, UserStatus} from '../../resources/user/user.interface'
import {Types} from 'mongoose'
import {normalizeEmail} from 'validator'
import {Channel} from '../../resources/channel/channel.interface'
import {Category} from '../../resources/category/category.interface'
import {Choice, Question} from '../../resources/question/question.interface'
import uuidv4 from 'uuid/v4'
import _ from 'lodash'
import {Survey} from '../../resources/survey/survey.interface'

export const createMockId = () => {
	const ObjectId = Types.ObjectId
	const id = new ObjectId()
	return id.toHexString()
}

export const createMockUser = (
	role: UserRole = UserRole.User,
	status?: UserStatus,
): User => ({
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: normalizeEmail(faker.internet.email()) as string,
	passport: {
		password: faker.internet.password(),
	},
	role,
	status,
})

export const createMockCategory = (name?: string): Category => ({
	name: name || faker.lorem.word(),
	description: faker.lorem.words(),
	imageUrl:
		'https://user-images.githubusercontent.com/17778976/68159361-4cac2380-ff5a-11e9-8529-0e0721d7bdb3.png',
	instruction: {
		text: faker.lorem.words(),
		imageUrl:
			'https://user-images.githubusercontent.com/17778976/68159361-4cac2380-ff5a-11e9-8529-0e0721d7bdb3.png',
	},
})

export const createMockChannel = (
	name?: string,
	activeSurveyId?: string,
): Channel => ({
	name: name || faker.lorem.word(),
	activeSurveyId: activeSurveyId || uuidv4(),
})

export const createMockSurvey = (questions: Question[]): Survey => ({
	name: faker.lorem.word(),
	description: faker.lorem.words(),
	questions,
})

export const createMockQuestion = (category: string): Question => ({
	heading: faker.lorem.words(),
	category,
	choices: [
		..._.times(2, () => createMockChoice(false)),
		..._.times(3, () => createMockChoice(true)),
	],
})

export const createMockChoice = (isForChildren: boolean): Choice => ({
	isForChildren,
	value: faker.lorem.word(),
	imageUrl:
		'https://user-images.githubusercontent.com/17778976/68158409-3a30ea80-ff58-11e9-9c2e-165b093cbbb7.png',
})
