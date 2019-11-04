import {RequestHandler, RequestParamHandler} from 'express'
import * as services from './category.service'
import {successResponse} from '../../utils/apiResponse'

export const parseCategoryId: RequestParamHandler = (req, res, next, id) => {
	services
		.parseCategoryId(id)
		.then(category => {
			req.category = category
			return next()
		})
		.catch(next)
}

export const getCategories: RequestHandler = (req, res, next) => {
	services
		.getCategories()
		.then(category => res.json(successResponse(category)))
		.catch(next)
}

export const getCategory: RequestHandler = (req, res, next) => {
	return res.json(successResponse(req.category))
}

export const createChannel: RequestHandler = (req, res, next) => {
	return services
		.createCategory(req.body)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}

export const updateChannel: RequestHandler = (req, res, next) => {
	return services
		.updateCategory(req.category.id, req.body)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}

export const deleteChannel: RequestHandler = (req, res, next) => {
	return services
		.deleteCategory(req.category.id)
		.then(category => res.json(successResponse(category)))
		.catch(next)
}
