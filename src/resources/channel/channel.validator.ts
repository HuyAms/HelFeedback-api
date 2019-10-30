import {body} from 'express-validator/check'
import {handleValidationError} from '../../middlewares/validator'

export const validateCreateChannel = () => {
	return [
		body('name', 'Name must be a string').isString(),
		handleValidationError,
	]
}

export const validateUpdateChannel = () => {
	return [
		body('name', 'Name must be a string')
			.isString()
			.optional(),
		handleValidationError,
	]
}
