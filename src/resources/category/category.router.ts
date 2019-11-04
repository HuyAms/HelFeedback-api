import {Router} from 'express'
import * as controller from './category.controller'
import {Permission, protect} from '../../middlewares/permission'
import {
	validateUpdateCategory,
	validateCreateCategory,
} from './category.validator'

const router = Router()

const channelWrite = protect([Permission.ChannelWrite])

router.param('id', controller.parseChannelIdParam)

router
	.route('/')
	.get(controller.getCategories)
	.post(validateCreateCategory, controller.createChannel)

router
	.route('/:id')
	.get(controller.getChannel)
	.put(channelWrite, validateUpdateCategory, controller.updateChannel)
	.delete(channelWrite, controller.deleteChannel)

export default router
