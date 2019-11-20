import {RequestHandler, RequestParamHandler} from 'express'
import * as services from './survey.service'
import {successResponse} from '../../utils/apiResponse'

export const parseSurveyIdParam: RequestParamHandler = (req, res, next, id) => {
	services
		.parseSurveyParams(id)
		.then(survey => {
			req.survey = survey
			return next()
		})
		.catch(next)
}

export const getSurveys: RequestHandler = (req, res, next) => {
	services
		.getSurveys(req.query.name)
		.then(surveys => res.json(successResponse(surveys)))
		.catch(next)
}

export const getSurvey: RequestHandler = (req, res, next) => {
	return services
		.getSurvey(req.params.id)
		.then(survey => res.json(successResponse(survey)))
		.catch(next)
}

export const createSurvey: RequestHandler = (req, res, next) => {
	return services
		.createSurvey(req.body)
		.then(survey => res.json(successResponse(survey)))
		.catch(next)
}

export const updateSurvey: RequestHandler = (req, res, next) => {
	return services
		.updateSurvey(req.survey.id, req.body)
		.then(survey => res.json(successResponse(survey)))
		.catch(next)
}

export const deleteSurvey: RequestHandler = (req, res, next) => {
	return services
		.deleteSurvey(req.survey.id)
		.then(survey => res.json(successResponse(survey)))
		.catch(next)
}
