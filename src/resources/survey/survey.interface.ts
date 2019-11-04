import {Question} from '../question/question.interface'

export interface Survey {
	name: string
	description?: string
	questions: Question[]
}
