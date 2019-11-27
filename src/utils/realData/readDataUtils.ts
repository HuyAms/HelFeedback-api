import fs from 'fs'
import path from 'path'
import {Category} from '../../resources/category/category.interface'

export const getCategories = (): Category[] => {
	const rawData = fs.readFileSync(path.resolve(__dirname, './categories.json'))
	const categories = JSON.parse(rawData.toString())
	console.log('CATEGORIES: ', categories)
	console.log('HELLO')
	return categories
}
