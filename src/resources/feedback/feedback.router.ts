import {Router} from 'express'
import * as controller from './feedback.controller'
const router = Router()

router.route('/').post(controller.createFeedback)

export default router
