import {Router} from 'express'
import * as controller from './statistic.controller'
// import {Permission, protect} from '../../middlewares/permission'

const router = Router()

// const statisticRead = protect([Permission.StatisticRead])

router.route('/').get(controller.getSurveyStatistic)

export default router
