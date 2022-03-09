import React from 'react'
import styles from './QuestionOptions.module.scss'

import styleList from './styles.json'

const btnSizes = styleList.btn
const tealStyle = styleList.teal
//Combining multiple JSON style objects
const tealBtn = Object.assign(btnSizes, tealStyle)

interface QProps {
    checkAnswer: (isCorrect: boolean) => void
    answerOption: { answerText: string; isCorrect: boolean }
}

function QuestionOptions(props: QProps) {
    return (
        <button
            className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 k w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
            //style={tealBtn}
            onClick={() => props.checkAnswer(props.answerOption.isCorrect)}
        >
            {props.answerOption.answerText}
        </button>
    )
}

export default QuestionOptions
