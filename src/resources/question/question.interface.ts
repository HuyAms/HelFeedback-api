export interface Question {
	heading: string
	subtitle?: string
	category?: string
	choices: Choice[]
}

export interface Choice {
	value: string
	imageUrl?: string
	showOnMobile: boolean
}
