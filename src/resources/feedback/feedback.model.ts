import mongoose, {Document} from 'mongoose'
import {Feedback} from './feedback.interface'

export interface FeedbackDocument extends Document, Feedback {}

const feedbackSchema = new mongoose.Schema(
	{
		channelId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'channel',
			require: true,
		},
		surveyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'survey',
			require: true,
		},
		questionId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'question',
		},
		value: {
			type: String,
			require: true,
		},
		userGroup: {
			type: String,
			enum: ['adult', 'child'],
			require: true,
		},
	},
	{timestamps: true},
)

const FeedbackModel = mongoose.model<FeedbackDocument>(
	'feedback',
	feedbackSchema,
)

export default FeedbackModel
