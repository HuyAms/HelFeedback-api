import createLogger from '../../utils/logger'
import CategoryModel, {CategoryDocument} from './category.model'
import {Category} from './category.interface'
import {notFound} from '../../utils/apiError'

const logger = createLogger(module)

export const parseCategoryId = async (
	id: string,
): Promise<CategoryDocument> => {
	const channel = await CategoryModel.findById(id).exec()

	if (!channel) {
		throw notFound('Cannot find category with that id')
	}

	return channel
}

export const getCategories = (): Promise<CategoryDocument[]> => {
	logger.debug('Get categires')
	return CategoryModel.find().exec()
}

export const deleteCategory = (id: string): Promise<CategoryDocument> => {
	logger.debug('Delete category: ', id)
	return CategoryModel.findByIdAndDelete().exec()
}

export const createCategory = (
	category: Category,
): Promise<CategoryDocument> => {
	logger.debug('Create category: %o', category)
	return CategoryModel.create(category)
}

export const updateCategory = (
	id: string,
	category: Category,
): Promise<CategoryDocument> => {
	logger.debug('Update channel: %o', category)
	return CategoryModel.findByIdAndUpdate(id, category).exec()
}
