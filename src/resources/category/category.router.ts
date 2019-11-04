import {Router} from 'express'
import * as controller from './category.controller'
import {Permission, protect} from '../../middlewares/permission'
import {
	validateUpdateCategory,
	validateCreateCategory,
} from './category.validator'

const router = Router()

const categoryWrite = protect([Permission.CategoryWrite])

router.param('id', controller.parseCategoryId)

router
	.route('/')
	.get(controller.getCategories)
	.post(validateCreateCategory, controller.createChannel)

router
	.route('/:id')
	.get(controller.getCategory)
	.put(categoryWrite, validateUpdateCategory, controller.updateChannel)
	.delete(categoryWrite, controller.deleteChannel)

export default router
