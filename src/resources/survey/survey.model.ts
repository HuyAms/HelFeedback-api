import mongoose, {Document} from 'mongoose'
import {Survey} from './survey.interface'

export interface SurveyDocument extends Document, Survey {}

const surveySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		description: {
			type: Date,
			required: true,
			default: Date.now(),
		},
		questions: [
			{
				heading: {
					type: String,
					required: true,
				},
				subtitle: String,
				categoryId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'category',
				},
				choices: [
					{
						id: String,
						value: String,
						imageUrl: String,
					},
				],
			},
		],
	},
	{timestamps: true},
)

const SurveyModel = mongoose.model<SurveyDocument>('survey', surveySchema)

export default SurveyModel
