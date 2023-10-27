import styles from './Quiz.module.scss'
import QuestionOptions from './QuestionOptions'
import QuestionSelection from './QuestionSelection'
import OptionButtons from './OptionButtons'
import { questions as internalQuestions } from './QuestionArr'
import { strReplace, transformExtQuestions } from './functions'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import Answer from './Answer'
import { TriviaSectionProps, QuizQuestion } from './types'

const TriviaSection = (props: TriviaSectionProps) => {
    const { numCorrect, questionNum, checkAnswer, restartGame, colorChange, colorMode, apiUrl, changeQuestion } = props
    const [questions, setQuestions] = useState<QuizQuestion[]>([])
    const [answerCorrect, setAnswerCorrect] = useState(false)
    const [questionAnswered, setAnsweredQuestion] = useState(false)

    useEffect(() => {
        fetch(apiUrl)
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
    }, [apiUrl])

    return (
        <div className={cn('md:flex justify-center items-center', styles.section)}>
            {questions.length !== 0 && (
                <>
                    {questionNum >= questions.length ? (
                        <div className="score-section w-4/6 font-bold text-4xl text-white my-4 text-center mx-auto p-2">
                            Game over: You scored {numCorrect} out of {questions.length}
                        </div>
                    ) : (
                        <>
                            <QuestionSelection questionNum={questionNum} questions={questions} />

                            {questionAnswered && (
                                <Answer
                                    isCorrect={answerCorrect}
                                    correctAnswer={questions[questionNum].correct_answer}
                                    setAnsweredQuestion={setAnsweredQuestion}
                                    changeQuestion={changeQuestion}
                                />
                            )}
                            {!questionAnswered && (
                                <div className={styles.Quiz__answer_section}>
                                    {questions[questionNum].answerOptions.map((answerOption: any, index: number) => (
                                        <QuestionOptions
                                            checkAnswer={checkAnswer}
                                            answerOption={answerOption}
                                            key={index}
                                            correctAnswer={questions[questionNum].correct_answer}
                                            setAnswerCorrect={setAnswerCorrect}
                                            setAnsweredQuestion={setAnsweredQuestion}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </>
            )}

            <OptionButtons
                restartGame={restartGame}
                colorChange={colorChange}
                /* changeCategory={changeCategory} */
                triviaMode={questions}
                questions={questions}
                colorMode={colorMode}
            />
        </div>
    )
}

export default TriviaSection
