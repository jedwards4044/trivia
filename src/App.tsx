import React, { useState, useEffect } from 'react'
import './App.css'
import Quiz from './Quiz'
import { questions as internalQuestions } from './QuestionArr'
import { ApiQuizQuestion, QuizQuestion, QuizAnswer } from './types'
const quizAPI = 'https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple'

function shuffle(array: QuizAnswer[]) {
    array.sort(() => Math.random() - 0.5)
}

function transformExtQuestions(extQuestions: ApiQuizQuestion[]) {
    //console.log('extQuestions in sortArrays: ', extQuestions)
    let sortedQuiz: ApiQuizQuestion[] = Object.values(extQuestions)
    let newQuiz: any = []
    //let newQuiz: newQuizInt[] = []

    //Grab first questions (need to make this loop)
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
        allAnswers.push(rightAnswer)
        //let groupAnswers = []
        for (let i = 0; i < (wrongAnswers?.length || 0); i++) {
            //let newWrongs = [{ answerText: wrongAnswers[i] }, { isCorrect: false }]

            allAnswers.push({ answerText: wrongAnswers![i], isCorrect: false })
        }

        shuffle(allAnswers)
        newObject = { ...singleQuestion[i], answerOptions: allAnswers }

        //shuffle(newObject.answerOptions)

        newQuiz.push(newObject)
        //console.log('new quiz', newQuiz)

        //let objModel: any = Object.values(sortedQuestions)
    }

    return newQuiz
    //setCategory(arrQuestions)
}

function useQuizData() {
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
}

function App() {
    let questions = useQuizData()
    /*  const toggleDataSource = () => {
        questions = questions === internalQuestions ? apiQuestions : internalQuestions
    }
 */
    return (
        <div className="App">
            <Quiz questions={questions} />
            {/* <button onClick={toggleDataSource}>Toggle Data Source</button> */}
        </div>
    )
}

export default App
