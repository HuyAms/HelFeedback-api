import createLogger from '../../utils/logger'
import SurveyModel, {SurveyDocument} from './survey.model'
import {notFound} from '../../utils/apiError'
import {Survey} from './survey.interface'

const logger = createLogger(module)

export const parseSurveyParams = async (
	id: string,
): Promise<SurveyDocument> => {
	const survey = await SurveyModel.findById(id).exec()

	if (!survey) {
		throw notFound('Cannot find survey with that id')
	}

	return survey
}

export const getSurveys = (name: string): Promise<SurveyDocument[]> => {
	logger.debug('Get surveys')

	if (name) {
		return SurveyModel.find({name}).exec()
	}

	return SurveyModel.find().exec()
}

export const getSurvey = (id: string): Promise<SurveyDocument> => {
	const survey = SurveyModel.findById(id)
		.populate({
			path: 'questions.category',
		})
		.exec()

	if (!survey) {
		throw notFound('Cannot find survey with that id')
	}

	return survey
}

export const deleteSurvey = (id: string): Promise<SurveyDocument> => {
	logger.debug('Delete survey: ', id)
	return SurveyModel.findByIdAndDelete().exec()
}

export const createSurvey = (survey: Survey): Promise<SurveyDocument> => {
	logger.debug('Create survey: %o', survey)
	return SurveyModel.create(survey)
}

export const updateSurvey = (
	id: string,
	survey: Survey,
): Promise<SurveyDocument> => {
	logger.debug('Update survey: %o', survey)
	return SurveyModel.findByIdAndUpdate(id, survey).exec()
}
