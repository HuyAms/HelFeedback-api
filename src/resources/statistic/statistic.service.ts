import createLogger from '../../utils/logger'
// import {Feedback} from './feedback.interface'
// import FeedbackModel, {FeedbackDocument} from './feedback.model'

const logger = createLogger(module)

export const getChannelStatistic = (channelId: string): Promise<any> => {
	logger.debug('Get channelStatistic: %o', channelId)
	return Promise.resolve({hello: 'hi'})
}
