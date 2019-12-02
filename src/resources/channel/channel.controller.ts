import {RequestHandler, RequestParamHandler} from 'express'
import * as services from './channel.service'
import {successResponse} from '../../utils/apiResponse'

export const parseChannelNameParam: RequestParamHandler = (
	req,
	res,
	next,
	name,
) => {
	services
		.parseChannelNameParam(name)
		.then(channel => {
			req.channel = channel
			return next()
		})
		.catch(next)
}

export const parseChannelIdParam: RequestParamHandler = (
	req,
	res,
	next,
	id,
) => {
	services
		.parseChannelIdParam(id)
		.then(channel => {
			req.channel = channel
			return next()
		})
		.catch(next)
}

export const getChannels: RequestHandler = (req, res, next) => {
	services
		.getChannels()
		.then(channel => res.json(successResponse(channel)))
		.catch(next)
}

export const getChannel: RequestHandler = (req, res, next) => {
	return res.json(successResponse(req.channel))
}

export const getChannelFeedback: RequestHandler = (req, res, next) => {
	return services
		.getChannelFeedback(req.channel._id)
		.then(feedback => res.json(successResponse(feedback)))
}

export const createChannel: RequestHandler = (req, res, next) => {
	return services
		.createChannel(req.body)
		.then(channel => res.json(successResponse(channel)))
		.catch(next)
}

export const updateChannel: RequestHandler = (req, res, next) => {
	return services
		.updateChannel(req.channel.id, req.body)
		.then(channel => res.json(successResponse(channel)))
		.catch(next)
}

export const deleteChannel: RequestHandler = (req, res, next) => {
	return services
		.deleteChannel(req.channel.id)
		.then(channel => res.json(successResponse(channel)))
		.catch(next)
}
