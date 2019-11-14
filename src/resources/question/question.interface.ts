export interface Question {
	heading: string
	subtitle?: string
	category?: string
	choices: Choice[]
}

export interface Choice {
	id: string
	value: string
	imageUrl?: string
}
