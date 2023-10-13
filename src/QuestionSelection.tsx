import React from 'react'
import styles from './QuestionSelections.module.scss'
import { questionTypes } from './types'

/* interface optionTypes {
    answerText: string
    isCorrect: boolean
}
interface questionTypes {
    question: string
    answerOptions: optionTypes[]
}
 */
interface QuestionProps {
    questionNum: number
    questions: questionTypes[]
}

function QuestionSelection(props: QuestionProps) {
    //Replacing &quot with quotes

    return (
        <div className={styles.QuestionSelections}>
            <div className={`${styles.Quiz__question_count} text-2xl text-white py-3 border-b-2 w-1/2 m-auto `}>
                Question {props.questionNum + 1}/{props.questions.length}
            </div>
            <div className={`${styles.QuestionSelections__question_text} text-3xl text-white italic text-center m-auto my-4 max-w-md p-3`}>
                {props.questions[props.questionNum].question}
            </div>
        </div>
    )
}

export default QuestionSelection
