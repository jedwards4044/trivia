import React, { useState, useEffect } from 'react'
import styles from './Quiz.module.scss'
import QuestionOptions from './QuestionOptions'
import QuestionSelection from './QuestionSelection'
import OptionButtons from './OptionButtons'
import { movieQuestions, questions } from './QuestionArr'

/* import styleList from './styles.json'
const newStyles = styleList.style
const buttonStyles = styleList.btn */

//https://opentdb.com/api_config.php
const quizAPI = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple'

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
        category: 'string'
        type: 'string'
        difficulty: 'string'
        question: 'string'
        correct_answer: 'string'
        incorrect_answers: 'string'
    }

    const [questionNum, setQuestion] = useState(0)
    const [numCorrect, setCorrect] = useState(0)
    const [colorMode, setColor] = useState(false)
    const [triviaMode, setCategory] = useState(questions)
    const [extQuestions, setQuestions] = useState<any>({})
    const [sortedQuestions, setSortedQuestions] = useState({})

    useEffect(() => {
        //getQuestions()
        sortArrays()
        //console.log('sortedQuestions: ', sortedQuestions)
    }, [extQuestions])

    /*     useEffect(() => {
        console.log('sortedQuestions useEffect: ', sortedQuestions)
    }, [sortedQuestions]) */

    //console.log('questions', extQuestions)
    //Only run function when questions array is populated
    /*    if (Object.keys(extQuestions).length !== 0) {
        sortArrays()
    } */
    //let newExt: any = []

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
        //console.log('sorted', sortedQuiz)
        let newQuiz = []

        //Grab first questions (need to make this loop)
        //create array of all answers

        for (let i = 0; i < sortedQuiz.length; i++) {
            //let newKey = { questions: [] }
            let newObject = {}
            let allAnswers = []
            let singleQuestion = extQuestions

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
        }

        //console.log('All Questions', newQuiz)
        setSortedQuestions(newQuiz)
    }
    console.log('All Questions', sortedQuestions)

    //console.log('All Questions', extQuestions)
    function shuffle(array: any) {
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
        category = triviaMode === questions ? movieQuestions : questions
        //category = extQuestions
        setCategory(category)
        restartGame()
    }
    return (
        <div
            className={`${styles.Quiz} 
        w-full sm:h-screen items-center py-12  
        ${colorMode ? styles.darkMode : ''}`}
        >
            <div
                className={`${styles.Quiz__title} 
            text-4xl text-white font-bold p-5 bg-black w-1/2 m-auto my-9 rounded-lg`}
                //style={newStyles}
            >
                {triviaMode === questions ? 'Random Trivia!' : 'Movie Trivia!'}
            </div>
            <div className="md:flex justify-center items-center">
                {questionNum >= triviaMode.length ? (
                    <div className="score-section w-4/6 font-bold text-4xl text-white m-1">
                        Game over: You scored {numCorrect} out of {triviaMode.length}
                    </div>
                ) : (
                    <>
                        <QuestionSelection questionNum={questionNum} questions={triviaMode} />

                        <div className={styles.Quiz__answer_section}>
                            {triviaMode[questionNum].answerOptions.map((answerOption, index) => (
                                <QuestionOptions checkAnswer={checkAnswer} answerOption={answerOption} key={index} />
                            ))}
                        </div>

                        {/*  <div className={styles.Quiz__answer_section}>
                            {quizExt.incorrect_answers[questionNum].answerOptions.map((answerOption, index) => (
                                <QuestionOptions checkAnswer={checkAnswer} answerOption={answerOption} indexOf={index} />
                            ))}
                        </div> */}
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
