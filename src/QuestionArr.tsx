import { QuizQuestion } from './types'

const questions: any[] = [
    {
        question: 'What is the capital of Ireland?',
        answerOptions: [
            { answerText: 'New York', isCorrect: false },
            { answerText: 'Kerry', isCorrect: false },
            { answerText: 'Dublin', isCorrect: true },
            { answerText: 'London', isCorrect: false },
        ],
    },
    {
        question: 'Who is CEO of Tesla?',
        answerOptions: [
            { answerText: 'Jeff Bezos', isCorrect: false },
            { answerText: 'Elon Musk', isCorrect: true },
            { answerText: 'Bill Gates', isCorrect: false },
            { answerText: 'Tony Stark', isCorrect: false },
        ],
    },
    {
        question: 'Which artist famously cut off his own ear?',
        answerOptions: [
            { answerText: 'Vincent Van Gogh', isCorrect: true },
            { answerText: 'Claude Monet', isCorrect: false },
            { answerText: 'Salvador Dali', isCorrect: false },
            { answerText: 'Pablo Picasso', isCorrect: false },
        ],
    },
    {
        question: 'How many Harry Potter books are there?',
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '4', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '7', isCorrect: true },
        ],
    },
]

//Movie Trivia
const movieQuestions: any[] = [
    {
        question: 'Which is the First US film to Feature a toilet flushing?',
        answerOptions: [
            { answerText: 'A Clockwork Orange', isCorrect: false },
            { answerText: 'Psycho', isCorrect: true },
            { answerText: 'The Apartment', isCorrect: false },
            { answerText: 'The Shining', isCorrect: false },
        ],
    },
    {
        question: 'Which Hitchcock movie does not have Jimmy Stewart in it?',
        answerOptions: [
            { answerText: 'Rear Window', isCorrect: false },
            { answerText: 'Strangers on a Train', isCorrect: true },
            { answerText: 'Rope', isCorrect: false },
            { answerText: 'Vertigo', isCorrect: false },
        ],
    },
    {
        question: 'Which film did Tarantino first direct',
        answerOptions: [
            { answerText: 'Reservoir Dogs', isCorrect: true },
            { answerText: 'Jackie Brown', isCorrect: false },
            { answerText: 'True Romance', isCorrect: false },
            { answerText: 'Pulp Fiction', isCorrect: false },
        ],
    },
    {
        question: "Which film has the famous line of 'You talking to me?'",
        answerOptions: [
            { answerText: 'Fight Club', isCorrect: false },
            { answerText: 'The Godfather', isCorrect: false },
            { answerText: 'Taxi Driver', isCorrect: true },
            { answerText: 'Goodfellas', isCorrect: false },
        ],
    },
    {
        question: 'Which actor is in the most Wes Anderson films',
        answerOptions: [
            { answerText: 'Bill Murray', isCorrect: true },
            { answerText: 'Owen Wilson', isCorrect: false },
            { answerText: 'Jason Schwartzman', isCorrect: false },
            { answerText: 'Adrien Brody', isCorrect: false },
        ],
    },
    {
        question: 'Which is not a Rob Reiner film',
        answerOptions: [
            { answerText: 'When Harry Met Sally', isCorrect: false },
            { answerText: 'Misery', isCorrect: false },
            { answerText: 'Stand By Me', isCorrect: false },
            { answerText: 'The Breakfast Club', isCorrect: true },
        ],
    },
]

export { movieQuestions, questions }
