export interface QuizQuestion {
    question: string
    answerOptions: QuizAnswer[]
    correct_answer: string
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

export interface AnswerProps {
    isCorrect: boolean
    correctAnswer: string
    changeQuestion: () => void
    setAnsweredQuestion: (value: boolean) => void
}

export interface QuestionOptionsProps {
    checkAnswer: (isCorrect: boolean, correctAnswer: string, setAnswerCorrect: (value: boolean) => void) => void
    answerOption: { answerText: string; isCorrect: boolean }
    correctAnswer: string
    setAnswerCorrect: (value: boolean) => void
    setAnsweredQuestion: (value: boolean) => void
}

export interface optionTypes {
    answerText: string
    isCorrect: boolean
}
export interface questionTypes {
    question: string
    answerOptions: optionTypes[]
}

export interface OptionProps {
    restartGame: () => void
    colorChange: () => void
    //changeCategory: () => void
    triviaMode: questionTypes[]
    questions: questionTypes[]
    colorMode: boolean
}

export interface TriviaSectionProps {
    checkAnswer: (isCorrect: boolean, correctAnswer: string, setAnswerCorrect: (value: boolean) => void) => void
    numCorrect: number
    questionNum: number
    apiUrl: string
    changeQuestion: () => void
    restartGame: () => void
    colorChange: () => void
    //changeCategory: () => void
    colorMode: boolean
}
