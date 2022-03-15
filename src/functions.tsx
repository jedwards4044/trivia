import { ApiQuizQuestion, QuizQuestion, QuizAnswer } from './types'

//Transforming API questions
export function transformExtQuestions(extQuestions: ApiQuizQuestion[]) {
    //console.log('extQuestions in sortArrays: ', extQuestions)
    let sortedQuiz: ApiQuizQuestion[] = Object.values(extQuestions)
    let newQuiz: any = []
    //let newQuiz: newQuizInt[] = []

    //create array of all answers

    for (let i = 0; i < sortedQuiz.length; i++) {
        //let newKey = { questions: [] }
        let newObject = {}
        let allAnswers: QuizAnswer[] = []
        //let singleQuestion = extQuestions
        let singleQuestion = Object.values(extQuestions)

        //Create variable for correct and incorrect answers
        let correctAnswer = sortedQuiz[i].correct_answer
        let wrongAnswers = sortedQuiz[i].incorrect_answers

        //Define right answer is true and push to all Questions array
        let rightAnswer = { answerText: correctAnswer || '* UNDEFINED ANSWER *', isCorrect: true }
        rightAnswer.answerText = strReplace(rightAnswer.answerText)
        allAnswers.push(rightAnswer)
        //let groupAnswers = []
        for (let i = 0; i < (wrongAnswers?.length || 0); i++) {
            //let newWrongs = [{ answerText: wrongAnswers[i] }, { isCorrect: false }]

            //allAnswers.push({ answerText: wrongAnswers![i], isCorrect: false })
            let otherAnswers = { answerText: wrongAnswers![i], isCorrect: false }
            otherAnswers.answerText = strReplace(otherAnswers.answerText)
            allAnswers.push(otherAnswers)
        }
        //randomize answer order
        shuffle(allAnswers)
        //answer answers to question
        newObject = { ...singleQuestion[i], answerOptions: allAnswers }

        newQuiz.push(newObject)
    }

    return newQuiz
}

//Replace HTML entities
export function strReplace(newWord: string) {
    var textarea = document.createElement('textarea')
    textarea.innerHTML = newWord
    return textarea.value
}

//Shuffle array questions into random order
export function shuffle(array: QuizAnswer[]) {
    array.sort(() => Math.random() - 0.5)
}
