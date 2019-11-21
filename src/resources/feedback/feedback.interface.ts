export interface Feedback {
	channelId: string
	surveyId: string
	questionId: string
	value: string
	userGroup: UserGroup
}

enum UserGroup {
	adult = 'adult',
	child = 'child',
}
