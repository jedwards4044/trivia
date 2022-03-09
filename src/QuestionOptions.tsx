import React from 'react'
import styles from './QuestionOptions.module.scss'

import styleList from './styles.json'

//Combining multiple JSON style objects
const btnSizes = styleList.btn
const tealStyle = styleList.teal
const tealBtn = Object.assign(btnSizes, tealStyle)

interface QProps {
    checkAnswer: (isCorrect: boolean) => void
    answerOption: { answerText: string; isCorrect: boolean }
    strReplace: (arg0: string) => string
}

function QuestionOptions(props: QProps) {
    let newAnswer = props.strReplace(props.answerOption.answerText)

    return (
        <button
            className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 k w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
            //style={tealBtn}
            onClick={() => props.checkAnswer(props.answerOption.isCorrect)}
        >
            {newAnswer}
        </button>
    )
}

export default QuestionOptions
