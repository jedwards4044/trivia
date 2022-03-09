import React, { useState, useEffect } from 'react'
import styles from './Quiz.module.scss'
import QuestionOptions from './QuestionOptions'
import QuestionSelection from './QuestionSelection'
import OptionButtons from './OptionButtons'
import { QuizQuestion, QuizAnswer } from './types'

/* import styleList from './styles.json'
const newStyles = styleList.style
const buttonStyles = styleList.btn */

//https://opentdb.com/api_config.php

//movies https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple
//books https://opentdb.com/api.php?amount=10&category=10&type=multiple

//random https://opentdb.com/api.php?amount=10&type=multiple

//const quizExt = quizData
interface QuizProps {
    questions: QuizQuestion[]
    title?: string
}

function Quiz(props: QuizProps) {
    const { questions } = props

    //console.log('initial', questions)

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
    // const [extQuestions, setQuestions] = useState<QuizQuestion>({})
    const [sortedQuestions, setSortedQuestions] = useState([])
    //const [sortedQuestions, setSortedQuestions] = useState<newQuizInt[]>([])

    // useEffect(() => {
    //     //getQuestions()
    //     sortArrays()
    //     //console.log('sortedQuestions: ', sortedQuestions)
    // }, [extQuestions])

    // console.log('All Questions', sortedQuestions)
    let arrQuestions = Object.values(sortedQuestions)

    //console.log('All Questions', extQuestions)
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
        // let category
        // // category = triviaMode === questions ? movieQuestions : questions
        // category = triviaMode === questions ? arrQuestions : questions
        // //category = extQuestions
        // setCategory(category)
        // console.log('newtriv mode', triviaMode)
        // restartGame()
    }
    //console.log('tmode', triviaMode)

    //decode html
    function strReplace(newWord: string) {
        newWord = newWord.replace(/&quot;/g, '"')
        newWord = newWord.replace(/&#039;/g, "'")
        newWord = newWord.replace(/&amp;/g, '&')
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
                {props.title || 'My Trivia'}
            </div>
            <div className="md:flex justify-center items-center">
                {questionNum >= questions.length ? (
                    <div className="score-section w-4/6 font-bold text-4xl text-white m-1">
                        Game over: You scored {numCorrect} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <QuestionSelection questionNum={questionNum} questions={questions} strReplace={strReplace} />

                        <div className={styles.Quiz__answer_section}>
                            {questions[questionNum].answerOptions.map((answerOption: any, index: number) => (
                                <QuestionOptions checkAnswer={checkAnswer} answerOption={answerOption} key={index} strReplace={strReplace} />
                            ))}
                        </div>
                    </>
                )}

                <OptionButtons
                    restartGame={restartGame}
                    colorChange={colorChange}
                    changeCategory={changeCategory}
                    triviaMode={questions}
                    questions={questions}
                    colorMode={colorMode}
                />
            </div>
            {/* <NestedClasses /> */}
        </div>
    )
}

export default Quiz
