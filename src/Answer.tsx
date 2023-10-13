import { useState } from 'react'
import styles from './answer.module.scss'
import cn from 'classnames'
import { AnswerProps } from './types'

const Answer = ({ isCorrect, correctAnswer, changeQuestion, setAnsweredQuestion }: AnswerProps) => {
    const [showAnswer, setShowAnswer] = useState(true)

    function closeAnswer() {
        setShowAnswer(false)
        setAnsweredQuestion(false)
        changeQuestion()
    }

    return (
        <>
            {showAnswer && (
                <div className={cn(`${styles.root}`, 'text-white font-bold py-4 px-4 rounded bg-teal-600 w-3/5 m-3 text-2xl border-4 border-teal-600')}>
                    <h3>That answer is {isCorrect ? 'correct!' : 'wrong!'}</h3>
                    {!isCorrect && <h4>The correct answer is {correctAnswer}</h4>}

                    <button
                        className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-black w-3/5 m-3 text-2xl border-4 border-white hover:bg-transparent`}
                        //className={`${styles.QuestionOption} ${btnClassesList}`}
                        //style={tealBtn}
                        onClick={() => closeAnswer()}
                    >
                        Next Question
                    </button>
                </div>
            )}
        </>
    )
}

export default Answer
