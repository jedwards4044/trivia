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
    //strReplace: (arg0: string) => string
}

function QuestionOptions(props: QProps) {
    var classNames = require('classnames')
    const btnClassesList = classNames(
        'text-white',
        'font-bold',
        'py-2',
        'px-4',
        'rounded',
        'bg-teal-600',
        'w-3/5',
        'm-3',
        'text-2xl',
        'border-4',
        'border-teal-600',
        'hover:bg-transparent'
    )

    return (
        <button
            //className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
            className={`${styles.QuestionOption} ${btnClassesList}`}
            //style={tealBtn}
            onClick={() => props.checkAnswer(props.answerOption.isCorrect)}
        >
            {props.answerOption.answerText}
        </button>
    )
}

export default QuestionOptions
