import faker from 'faker'
import {User, UserRole, UserStatus} from '../../resources/user/user.interface'
import {Types} from 'mongoose'
import {normalizeEmail} from 'validator'
import {Channel} from '../../resources/channel/channel.interface'
import {Category} from '../../resources/category/category.interface'

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

export const createMockChannel = (name?: string): Channel => ({
	name: name || faker.lorem.word(),
	lastFeedback: new Date(),
})

export const createMockCategory = (name?: string): Category => ({
	name: name || faker.lorem.word(),
	description: faker.lorem.words(),
	imageUrl: faker.internet.url(),
})
