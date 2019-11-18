import {RequestHandler} from 'express'
import * as services from './feedback.service'
import {successResponse} from '../../utils/apiResponse'

export const createFeedback: RequestHandler = (req, res, next) => {
	return services
		.create(req.body)
		.then(feedback => res.json(successResponse(feedback)))
		.catch(next)
}
