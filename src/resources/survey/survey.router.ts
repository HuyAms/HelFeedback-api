import {Router} from 'express'
import * as controller from './survey.controller'
import {Permission, protect} from '../../middlewares/permission'

const router = Router()

const surveyWrite = protect([Permission.ChannelWrite])

router.param('id', controller.parseSurveyIdParam)

router
	.route('/')
	.get(controller.getSurvey)
	.post(controller.createSurvey)

router
	.route('/:id')
	.get(controller.getSurvey)
	.put(surveyWrite, controller.updateSurvey)
	.delete(surveyWrite, controller.deleteSurvey)

export default router
