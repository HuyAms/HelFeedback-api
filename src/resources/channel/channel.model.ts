import mongoose, {Document} from 'mongoose'
import {Channel} from './channel.interface'

export interface ChannelDocument extends Document, Channel {}

const channelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		lastFeedback: {
			type: Date,
			required: true,
			default: Date.now(),
		},
	},
	{timestamps: true},
)

const ChannelModel = mongoose.model<ChannelDocument>('channel', channelSchema)

export default ChannelModel
