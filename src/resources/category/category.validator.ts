import {body} from 'express-validator/check'
import {handleValidationError} from '../../middlewares/validator'

export const validateCreateCategory = () => {
	return [
		body('name', 'Name must be a string').isString(),
		body('description', 'Description must be a string').isString().optional(),
		body('imageUrl', 'Must be url').isURL(),
		handleValidationError,
	]
}

export const validateUpdateCategory = () => {
	return [
		body('name', 'Name must be a string').isString().optional(),
		body('description', 'Description must be a string')
			.isString()
			.optional(),
		body('imageUrl', 'Must be url').isURL().optional(),
		handleValidationError,
	]
}
