import {Router} from 'express'
import * as controller from './channel.controller'
import {Permission, protect} from '../../middlewares/permission'
import {validateCreateChannel, validateUpdateChannel} from './channel.validator'

const router = Router()

const channelWrite = protect([Permission.ChannelWrite])

router.param('name', controller.parseChannelNameParam)
router.param('id', controller.parseChannelIdParam)

router
	.route('/')
	.get(controller.getChannels)
	.post(validateCreateChannel, controller.createChannel)

router
	.route('/:name')
	.get(controller.getChannel)
	.put(channelWrite, validateUpdateChannel, controller.updateChannel)
	.delete(channelWrite, controller.deleteChannel)

router.route('/:id/feedback').get(controller.getChannelFeedback)
export default router
