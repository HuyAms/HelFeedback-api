import {RequestHandler} from 'express'
import * as services from './statistic.service'
import {successResponse} from '../../utils/apiResponse'

export const getSurveyStatistic: RequestHandler = (req, res, next) => {
	return services
		.getChannelStatistic(req.params.id)
		.then(data => res.json(successResponse(data)))
		.catch(next)
}
