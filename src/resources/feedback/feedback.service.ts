import createLogger from '../../utils/logger'
import {Feedback} from './feedback.interface'
import FeedbackModel, {FeedbackDocument} from './feedback.model'

const logger = createLogger(module)

export const create = (feedback: Feedback): Promise<FeedbackDocument> => {
	logger.debug('Create feedback: %o', feedback)
	return FeedbackModel.create(feedback)
}
