import styles from './QuestionOptions.module.scss'
import styleList from './styles.json'
import { QuestionOptionsProps } from './types'

//Combining multiple JSON style objects
const btnSizes = styleList.btn
const tealStyle = styleList.teal
const tealBtn = Object.assign(btnSizes, tealStyle)

function QuestionOptions(props: QuestionOptionsProps) {
    const { checkAnswer, answerOption, correctAnswer, setAnswerCorrect, setAnsweredQuestion } = props
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

    function handleButton(isCorrect: boolean, correctAnswer: string, setAnswerCorrect: any) {
        checkAnswer(isCorrect, correctAnswer, setAnswerCorrect)
        setAnsweredQuestion(true)
    }

    return (
        <button
            //className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
            className={`${styles.QuestionOption} ${btnClassesList}`}
            //style={tealBtn}
            onClick={() => handleButton(answerOption.isCorrect, correctAnswer, setAnswerCorrect)}
        >
            {answerOption.answerText}
        </button>
    )
}

export default QuestionOptions
