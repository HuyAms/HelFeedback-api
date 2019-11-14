import mongoose, {Document} from 'mongoose'
import {Survey} from './survey.interface'
import uuidv4 from 'uuid/v4'

export interface SurveyDocument extends Document, Survey {}

const surveySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		description: String,
		questions: [
			{
				heading: {
					type: String,
					required: true,
				},
				subtitle: String,
				category: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'category',
				},
				choices: [
					{
						id: {
							type: String,
							required: true,
							default: uuidv4(),
						},
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
