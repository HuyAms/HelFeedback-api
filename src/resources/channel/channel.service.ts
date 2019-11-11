import createLogger from '../../utils/logger'
import ChannelModel, {ChannelDocument} from './channel.model'
import {Channel} from './channel.interface'
import {notFound} from '../../utils/apiError'

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

export const getChannels = (): Promise<ChannelDocument[]> => {
	logger.debug('Get channels')
	return ChannelModel.find().exec()
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
