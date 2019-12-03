export interface Feedback {
	channelId: string
	surveyId: string
	questionId: string
	value: string
	userGroup: UserGroup
	type: FeedbackType
}

enum UserGroup {
	adult = 'adult',
	child = 'child',
}

export enum FeedbackType {
	text = 'text',
	choice = 'choice',
}
