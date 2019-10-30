import {UserRole, UserStatus, User} from '../../resources/user/user.interface'
import UserModel, {UserDocument} from '../../resources/user/user.model'
import {createMockChannel, createMockUser} from './mock'
import ChannelModel, {
	ChannelDocument,
} from '../../resources/channel/channel.model'
import {Channel} from '../../resources/channel/channel.interface'

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
