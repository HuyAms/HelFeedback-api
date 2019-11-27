import fs from 'fs'
import path from 'path'
import {Category} from '../../resources/category/category.interface'
import {Question} from '../../resources/question/question.interface'

export const getCategories = (): Category[] => {
	const rawData = fs.readFileSync(path.resolve(__dirname, './categories.json'))
	const categories = JSON.parse(rawData.toString())
	return categories
}

export const getQuestionsGroupByCategory = (): Question[][] => {
	const temperatureQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './temperatureQuestions.json'),
	)
	const temperatureQuestions = JSON.parse(
		temperatureQuestionsRawData.toString(),
	)

	const soundQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './soundQuestions.json'),
	)
	const soundQuestions = JSON.parse(soundQuestionsRawData.toString())

	const lightQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './lightQuestions.json'),
	)
	const lightQuestions = JSON.parse(lightQuestionsRawData.toString())

	const indoorAirQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './indoorAirQuestions.json'),
	)
	const indoorAirQuestions = JSON.parse(indoorAirQuestionsRawData.toString())

	const humidityQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './humidityQuestions.json'),
	)
	const humidityQuestions = JSON.parse(humidityQuestionsRawData.toString())

	const cleanlinessQuestionsRawData = fs.readFileSync(
		path.resolve(__dirname, './cleanlinessQuestions.json'),
	)
	const cleanlinessQuestions = JSON.parse(
		cleanlinessQuestionsRawData.toString(),
	)

	// return [
	// 	...temperatureQuestions,
	// 	...soundQuestions,
	// 	...lightQuestions,
	// 	...indoorAirQuestions,
	// 	...humidityQuestions,
	// 	...cleanlinessQuestions,
	// ]

	return [
		temperatureQuestions,
		soundQuestions,
		lightQuestions,
		indoorAirQuestions,
		humidityQuestions,
		cleanlinessQuestions,
	]
}
