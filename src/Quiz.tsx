import React, { useState, useEffect } from 'react'
import styles from './Quiz.module.scss'
import QuestionOptions from './QuestionOptions'
import QuestionSelection from './QuestionSelection'
import OptionButtons from './OptionButtons'
import { questions } from './QuestionArr'

/* import styleList from './styles.json'
const newStyles = styleList.style
const buttonStyles = styleList.btn */

//https://opentdb.com/api_config.php

//movies https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple
//books https://opentdb.com/api.php?amount=10&category=10&type=multiple

//random https://opentdb.com/api.php?amount=10&type=multiple

const quizAPI = 'https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple'

//const quizExt = quizData

function Quiz() {
    useEffect(() => {
        //getQuestions()
        fetch(quizAPI)
            .then((response) => {
                //console.log(response)
                return response.json()
            })
            .then((data) => {
                //Work with JSON data here
                //console.log(data)
                setQuestions(data.results)

                // console.log('extQuestions after fetch: ', extQuestions)

                // sortArrays()

                return
            })
        /*         if (Object.keys(extQuestions).length !== 0) {
            sortArrays()
        } */
    }, [])

    interface sortQuiz {
        category?: 'string'
        type?: 'string'
        difficulty?: 'string'
        question?: 'string'
        correct_answer?: 'string'
        incorrect_answers?: 'string'
        answerOptions?: string[]
    }
    console.log('initial', questions)

    /*     interface newQuizInt {
        category?: 'string'
        type?: 'string'
        difficulty?: 'string'
        question?: 'string'
        correct_answer?: 'string'
        incorrect_answers?: 'string'
        answerOptions?: string[]
    } */

    const [questionNum, setQuestion] = useState(0)
    const [numCorrect, setCorrect] = useState(0)
    const [colorMode, setColor] = useState(false)
    const [extQuestions, setQuestions] = useState<sortQuiz>({})
    const [sortedQuestions, setSortedQuestions] = useState([])
    //const [sortedQuestions, setSortedQuestions] = useState<newQuizInt[]>([])
    const [triviaMode, setCategory] = useState(questions)

    useEffect(() => {
        //getQuestions()
        sortArrays()
        //console.log('sortedQuestions: ', sortedQuestions)
    }, [extQuestions])

    function sortArrays() {
        //console.log('extQuestions in sortArrays: ', extQuestions)
        interface sortQuiz {
            category: 'string'
            type: 'string'
            difficulty: 'string'
            question: 'string'
            correct_answer: 'string'
            incorrect_answers: 'string'
        }
        let sortedQuiz: sortQuiz[] = Object.values(extQuestions)
        let newQuiz: any = []
        //let newQuiz: newQuizInt[] = []

        //Grab first questions (need to make this loop)
        //create array of all answers

        for (let i = 0; i < sortedQuiz.length; i++) {
            //let newKey = { questions: [] }
            let newObject = {}
            let allAnswers = []
            //let singleQuestion = extQuestions
            let singleQuestion = Object.values(extQuestions)

            //console.log('question 1', sortedQuiz[i])

            //Create variable for correct and incorrect answers
            let correctAnswer = sortedQuiz[i].correct_answer
            let wrongAnswers = sortedQuiz[i].incorrect_answers

            //Define right answer is true and push to all Questions array
            let rightAnswer = { answerText: correctAnswer, isCorrect: true }
            allAnswers.push(rightAnswer)
            //let groupAnswers = []
            for (let i = 0; i < wrongAnswers.length; i++) {
                //let newWrongs = [{ answerText: wrongAnswers[i] }, { isCorrect: false }]

                allAnswers.push({ answerText: wrongAnswers[i], isCorrect: false })
            }

            shuffle(allAnswers)
            newObject = { ...singleQuestion[i], answerOptions: allAnswers }
            //console.log('new', newObject)
            //console.log('what this', typeof newObject.answerOptions)
            //shuffle(newObject.answerOptions)

            newQuiz.push(newObject)
            console.log('new quiz', newQuiz)

            //let objModel: any = Object.values(sortedQuestions)
        }

        //console.log('All Questions', newQuiz)

        setSortedQuestions(newQuiz)
        //setCategory(arrQuestions)
    }
    console.log('All Questions', sortedQuestions)
    let arrQuestions = Object.values(sortedQuestions)

    interface allAnswers {
        answerText: string
        isCorrect: boolean
    }

    //console.log('All Questions', extQuestions)
    function shuffle(array: allAnswers[]) {
        array.sort(() => Math.random() - 0.5)
    }

    function checkAnswer(isCorrect: boolean) {
        if (isCorrect === true) {
            let correct = numCorrect
            correct = correct + 1
            setCorrect(correct)
            alert('This answer is correct')
        } else {
            alert('This answer is wrong')
        }
        changeQuestion()
    }

    function changeQuestion() {
        const currentQuestion = questionNum
        setQuestion(currentQuestion + 1)
    }

    function restartGame() {
        setQuestion(0)
        setCorrect(0)
    }

    function colorChange() {
        setColor((currentColor) => !currentColor)
    }

    function changeCategory() {
        let category
        // category = triviaMode === questions ? movieQuestions : questions
        category = triviaMode === questions ? arrQuestions : questions
        //category = extQuestions
        setCategory(category)
        console.log('newtriv mode', triviaMode)
        restartGame()
    }
    console.log('length', triviaMode.length)
    //console.log('tmode', triviaMode)

    //decode html
    function strReplace(newWord: string) {
        newWord = newWord.replace(/&quot;/g, '"')
        newWord = newWord.replace(/&#039;/g, "'")
        return newWord
    }

    return (
        <div
            className={`${styles.Quiz} 
        w-full sm:h-screen items-center py-12  
        ${colorMode ? styles.darkMode : ''}`}
        >
            {/* <button onClick={startQuiz}>Start Now</button> */}

            <div
                className={`${styles.Quiz__title} 
            text-4xl text-white font-bold p-5 bg-black w-1/2 m-auto my-9 rounded-lg`}
                //style={newStyles}
            >
                {triviaMode === questions ? 'My Trivia' : 'Random Trivia!'}
            </div>
            <div className="md:flex justify-center items-center">
                {questionNum >= triviaMode.length ? (
                    <div className="score-section w-4/6 font-bold text-4xl text-white m-1">
                        Game over: You scored {numCorrect} out of {triviaMode.length}
                    </div>
                ) : (
                    <>
                        <QuestionSelection questionNum={questionNum} questions={triviaMode} strReplace={strReplace} />

                        <div className={styles.Quiz__answer_section}>
                            {triviaMode[questionNum].answerOptions.map((answerOption: any, index: number) => (
                                <QuestionOptions checkAnswer={checkAnswer} answerOption={answerOption} key={index} strReplace={strReplace} />
                            ))}
                        </div>
                    </>
                )}

                <OptionButtons
                    restartGame={restartGame}
                    colorChange={colorChange}
                    changeCategory={changeCategory}
                    triviaMode={triviaMode}
                    questions={questions}
                    colorMode={colorMode}
                />
            </div>
            {/* <NestedClasses /> */}
        </div>
    )
}

export default Quiz
