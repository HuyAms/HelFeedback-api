import {RequestHandler, RequestParamHandler} from 'express'
import * as services from './category.service'
import {successResponse} from '../../utils/apiResponse'

export const parseChannelIdParam: RequestParamHandler = (
	req,
	res,
	next,
	id,
) => {
	services
		.parseChannelIdParams(id)
		.then(category => {
			req.category = category
			return next()
		})
		.catch(next)
}

export const getCategories: RequestHandler = (req, res, next) => {
	services
		.getCategories()
		.then(channel => res.json(successResponse(channel)))
		.catch(next)
}

export const getChannel: RequestHandler = (req, res, next) => {
	return res.json(successResponse(req.channel))
}

export const createChannel: RequestHandler = (req, res, next) => {
	return services
		.createCategory(req.body)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}

export const updateChannel: RequestHandler = (req, res, next) => {
	return services
		.updateCategory(req.channel.id, req.body)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}

export const deleteChannel: RequestHandler = (req, res, next) => {
	return services
		.deleteCategory(req.channel.id)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}
