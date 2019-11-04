import mongoose, {Document} from 'mongoose'
import {Category} from './category.interface'

export interface CategoryDocument extends Document, Category {}

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: String,
		imageUrl: {
			type: String,
			required: true,
		},
	},
	{timestamps: true},
)

const CategoryModel = mongoose.model<CategoryDocument>(
	'category',
	categorySchema,
)

export default CategoryModel
