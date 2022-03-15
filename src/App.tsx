import React, { useState, useEffect, useRef } from 'react'
import Quiz from './Quiz'
import { questions as internalQuestions } from './QuestionArr'
import { ApiQuizQuestion, QuizQuestion, QuizAnswer } from './types'
import OptionButtons from './OptionButtons'
import styles from './App.module.scss'
import { shuffle, transformExtQuestions, strReplace } from './functions'
const quizAPI = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'

/* function shuffle(array: QuizAnswer[]) {
    array.sort(() => Math.random() - 0.5)
} */

/* function transformExtQuestions(extQuestions: ApiQuizQuestion[]) {
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

        shuffle(allAnswers)
        newObject = { ...singleQuestion[i], answerOptions: allAnswers }

        //shuffle(newObject.answerOptions)

        newQuiz.push(newObject)
        //let objModel: any = Object.values(sortedQuestions)

        console.log('converted q', newQuiz.question)
    }
    console.log('new quiz', newQuiz)

    return newQuiz

    //setCategory(arrQuestions)
}
function strReplace(newWord: string) {
    var textarea = document.createElement('textarea')
    textarea.innerHTML = newWord
    return textarea.value

    //return newWord
} */

/* function useQuizData() {
    const [questions, setQuestions] = useState(internalQuestions)

    useEffect(() => {
        //getQuestions()
        fetch(quizAPI)
            .then((response) => {
                //console.log('response', response)
                return response.json()
            })
            .then((data) => {
                //Work with JSON data here
                //Work with JSON data here
                console.log('data', data.results)
                const apiQuestions = transformExtQuestions(data.results)
                setQuestions(apiQuestions)
                console.log('Transformed Questions', apiQuestions)

                // sortArrays()

                return
            })
    }, [])

    return questions
} */

function App() {
    const [usingExtQuestions, setMode] = useState(true)
    const [questions, setQuestions] = useState(internalQuestions)

    useEffect(() => {
        //getQuestions()
        if (usingExtQuestions) {
            fetch(quizAPI)
                .then((response) => {
                    //console.log('response', response)
                    return response.json()
                })
                .then((data) => {
                    //Work with JSON data here
                    //console.log('data', data.results)
                    //const apiQuestions = transformExtQuestions(data.results)
                    const apiQuestions = transformExtQuestions(data.results)
                    //convert HTML characters
                    for (let i = 0; i < apiQuestions.length; i++) {
                        apiQuestions[i].question = strReplace(apiQuestions[i].question)
                    }

                    setQuestions(apiQuestions)
                    console.log('Transformed Questions', apiQuestions)

                    // sortArrays()

                    return apiQuestions
                })
        }
    }, [usingExtQuestions])

    function toggleDataSource() {
        if (usingExtQuestions) {
            setQuestions(internalQuestions)
        }
        setMode((prevMode) => !prevMode)
        //console.log('api', previousQuestions.current)
    }

    return (
        <div className={styles.App}>
            <button onClick={toggleDataSource} className={`${styles.App_btn} text-2xl text-white fixed top-0 right-0 w-1/5 bg-red-700 p-2 hover:bg-black`}>
                Toggle Data Source
            </button>
            <Quiz questions={questions} />
        </div>
    )
}

export default App
