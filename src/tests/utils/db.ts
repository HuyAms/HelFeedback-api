import {UserRole, UserStatus, User} from '../../resources/user/user.interface'
import UserModel, {UserDocument} from '../../resources/user/user.model'
import {createMockCategory, createMockChannel, createMockUser} from './mock'
import ChannelModel, {
	ChannelDocument,
} from '../../resources/channel/channel.model'
import {Channel} from '../../resources/channel/channel.interface'
import {Category} from '../../resources/category/category.interface'
import CategoryModel, {
	CategoryDocument,
} from '../../resources/category/category.model'
import SurveyModel, {SurveyDocument} from '../../resources/survey/survey.model'
import {Survey} from '../../resources/survey/survey.interface'

export const addUser = (user: User): Promise<UserDocument> => {
	const mockUser = user || createMockUser(UserRole.User, UserStatus.Active)

	mockUser.status = mockUser.status || UserStatus.Active

	const newUser = new UserModel(mockUser)
	return newUser.save()
}

export const addChannel = (channel: Channel): Promise<ChannelDocument> => {
	const mockChannel = channel || createMockChannel()

	return ChannelModel.create(mockChannel)
}

export const addCategory = (category: Category): Promise<CategoryDocument> => {
	const mockCategory = category || createMockCategory()

	return CategoryModel.create(mockCategory)
}

export const addSurvey = (survey: Survey): Promise<SurveyDocument> => {
	return SurveyModel.create(survey)
}
