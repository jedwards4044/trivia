import styles from './OptionButtons.module.scss'
import { OptionProps } from './types'

/* interface optionTypes {
    answerText: string
    isCorrect: boolean
}
interface questionTypes {
    question: string
    answerOptions: optionTypes[]
} */

function OptionButtons(props: OptionProps) {
    return (
        /* <div className="flex flex-col items-center"> */
        <div className="items-center flex-col flex m-2">
            <button
                onClick={props.restartGame}
                className={`  
                ${styles.Options__endBtn} 
                text-white font-bold px-4 rounded bg-black hover:bg-slate-600 py-3 text-2xl animate-bounce m-2 w-4/5 sm:w-full `}
            >
                Restart
            </button>

            <button
                onClick={props.colorChange}
                className={` 
                ${styles.Options__endBtn} 
                 text-white font-bold px-4 rounded bg-black hover:bg-slate-600 py-3 text-2xl animate-bounce m-2 w-4/5 sm:w-full `}
            >
                Switch Color Mode
            </button>

            {/* <button
                onClick={props.changeCategory}
                className={` 
                ${styles.Options__endBtn} 
                text-white font-bold px-4 rounded bg-black hover:bg-slate-600 py-3 text-2xl animate-bounce m-2 w-4/5 sm:w-full`}
            >
                {props.triviaMode === props.questions ? 'Switch to Random Trivia' : 'Switch to my trivia'}
            </button> */}
        </div>
    )
}

export default OptionButtons
