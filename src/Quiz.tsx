import { useState } from 'react'
import styles from './Quiz.module.scss'
import { QuizQuestion, QuizAnswer } from './types'
import ChoseTopic from './ChoseTopic'
import TriviaSection from './TriviaSections'
import Answer from './Answer'

//https://opentdb.com/api_config.php

//movies https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple
//books https://opentdb.com/api.php?amount=10&category=10&type=multiple

//random https://opentdb.com/api.php?amount=10&type=multiple

//const quizExt = quizData
interface QuizProps {
    questions?: QuizQuestion[]
    title?: string
    setTopic?: any
}

const Quiz = (props: QuizProps) => {
    //const { questions } = props
    const [questionNum, setQuestion] = useState(0)
    const [numCorrect, setCorrect] = useState(0)
    const [colorMode, setColor] = useState(false)

    const [apiUrl, setUrl] = useState('')
    const [topic, setTopic] = useState('')
    // const [extQuestions, setQuestions] = useState<QuizQuestion>({})
    //const [sortedQuestions, setSortedQuestions] = useState([])
    //const [sortedQuestions, setSortedQuestions] = useState<newQuizInt[]>([])

    //let arrQuestions = Object.values(sortedQuestions)

    /*     const [usingExtQuestions, setMode] = useState(true)
    function toggleDataSource() {
        if (usingExtQuestions) {
            setQuestions(internalQuestions)
        }
        setMode((prevMode) => !prevMode)
        //console.log('api', previousQuestions.current)
    } */

    //console.log(topic)

    //Checks if answer is right or wrong
    function checkAnswer(isCorrect: boolean, correctAnswer: string, setAnswerCorrect: any) {
        if (isCorrect === true) {
            let correct = numCorrect
            correct = correct + 1
            setCorrect(correct)
            //alert('This answer is correct')
            setAnswerCorrect(true)
        } else {
            //alert(`This answer is wrong, The correct answer is ${correctAnswer}`)
            setAnswerCorrect(false)
        }
        //changeQuestion()
    }
    //Changes question num to show next question
    function changeQuestion() {
        const currentQuestion = questionNum
        setQuestion(currentQuestion + 1)
    }
    //Restarting the game to question 1 correct 0
    function restartGame() {
        setUrl('')
        setQuestion(0)
        setCorrect(0)
    }

    //Changing colormode
    function colorChange() {
        setColor((currentColor) => !currentColor)
    }

    /* function changeCategory() {
        // let category
        // // category = triviaMode === questions ? movieQuestions : questions
        // category = triviaMode === questions ? arrQuestions : questions
        // //category = extQuestions
        // setCategory(category)
        // console.log('newtriv mode', triviaMode)
        // restartGame()
    } */
    //console.log('tmode', triviaMode)

    //decode html
    /* function strReplace(newWord: string) {

        var textarea = document.createElement('textarea')
        textarea.innerHTML = newWord
        return textarea.value
        return newWord

        //return newWord
    }*/

    return (
        /* <button onClick={toggleDataSource} className={`text-2xl relative text-white w-full bg-red-700 p-2 hover:bg-black`}>
                Toggle Data Source
            </button> */
        <div
            className={`${styles.Quiz} 
        w-full sm:h-screen items-center 
        ${colorMode ? styles.darkMode : ''}`}
        >
            <div className="py-12 ">
                <div
                    className={`${styles.Quiz__title} 
            text-4xl text-white font-bold p-5 bg-black w-1/2 m-auto my-9 rounded-lg text-center`}
                    //style={newStyles}
                >
                    {props.title || 'Trivia Time!'}
                </div>

                {!apiUrl && <ChoseTopic setUrl={setUrl} />}
                {apiUrl && (
                    <TriviaSection
                        apiUrl={apiUrl}
                        numCorrect={numCorrect}
                        questionNum={questionNum}
                        checkAnswer={checkAnswer}
                        restartGame={restartGame}
                        colorChange={colorChange}
                        colorMode={colorMode}
                        changeQuestion={changeQuestion}
                    />
                )}
            </div>
        </div>
    )
}

export default Quiz
