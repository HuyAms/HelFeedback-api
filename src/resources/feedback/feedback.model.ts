import mongoose, {Document} from 'mongoose'
import {Feedback} from './feedback.interface'

export interface FeedbackDocument extends Document, Feedback {}

const feedbackSchema = new mongoose.Schema(
	{
		channelId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'channel',
		},
		surveyId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'survey',
		},
		questionId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'question',
		},
		value: String,
	},
	{timestamps: true},
)

const FeedbackModel = mongoose.model<FeedbackDocument>(
	'feedback',
	feedbackSchema,
)

export default FeedbackModel
