export interface QuizQuestion {
    question: string
    answerOptions: QuizAnswer[]
}

export interface QuizAnswer {
    answerText: string
    isCorrect: boolean
}

export interface ApiQuizQuestion {
    category?: string
    type?: string
    difficulty?: string
    question?: string
    correct_answer?: string
    incorrect_answers?: string[]
}
