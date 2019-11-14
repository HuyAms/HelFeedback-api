export interface Category {
	name: string
	description?: string
	imageUrl: string
	instruction: Instruction
}

export interface Instruction {
	imageUrl: string
	text: string
}
