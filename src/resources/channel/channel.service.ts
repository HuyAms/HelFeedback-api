import createLogger from '../../utils/logger'
import ChannelModel, {ChannelDocument} from './channel.model'
import {Channel} from './channel.interface'
import {notFound} from '../../utils/apiError'
import FeedbackModel, {FeedbackDocument} from '../feedback/feedback.model'
import {FeedbackType} from '../feedback/feedback.interface'

const logger = createLogger(module)

export const parseChannelNameParam = async (
	name: string,
): Promise<ChannelDocument> => {
	const channel = await ChannelModel.findOne({name}).exec()

	if (!channel) {
		throw notFound('Cannot find channel with that name')
	}

	return channel
}

export const parseChannelIdParam = async (
	id: string,
): Promise<ChannelDocument> => {
	const channel = await ChannelModel.findById(id).exec()

	if (!channel) {
		throw notFound('Cannot find channel with that id')
	}

	return channel
}

export const getChannels = (): Promise<ChannelDocument[]> => {
	logger.debug('Get channels')
	return ChannelModel.find().exec()
}

export const getChannelFeedback = (
	channelId: string,
	type: FeedbackType,
): Promise<FeedbackDocument[]> => {
	logger.debug('Get feedback with channelId: ', channelId)
	return FeedbackModel.find({channelId, type}).exec()
}

export const deleteChannel = (id: string): Promise<ChannelDocument> => {
	logger.debug('Delete channel: ', id)
	return ChannelModel.findByIdAndDelete().exec()
}

export const createChannel = (channel: Channel): Promise<ChannelDocument> => {
	logger.debug('Create channel: %o', channel)
	return ChannelModel.create(channel)
}

export const updateChannel = (
	id: string,
	channel: Channel,
): Promise<ChannelDocument> => {
	logger.debug('Update channel: %o', channel)
	return ChannelModel.findByIdAndUpdate(id, channel).exec()
}
