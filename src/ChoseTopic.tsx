import { useState } from 'react'
import styles from './Quiz.module.scss'
import cn from 'classnames'

interface TopicProps {
    setUrl: (topic: string) => void
}

const ChoseTopic = (props: TopicProps) => {
    const [numQuestions, setNumQuestions] = useState<string>('')
    const [topic, setTopic] = useState<string>('')

    const btnClassesList = cn(
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

    const topics = [
        { title: 'Random', value: '10' },
        { title: 'Video Games', value: '15' },
        { title: 'History', value: '23' },
        { title: 'Film', value: '11' },
    ]
    const questionAmounts = ['5', '10', '15', '20']

    const updateTopic = (topic: string) => {
        setTopic(topic)
    }

    function updateNumQuestions(value: string) {
        setNumQuestions(value)
    }

    const updateFetchUrl = () => {
        const newUrl = `https://opentdb.com/api.php?amount=${numQuestions}&difficulty=easy&type=multiple&category=${topic}`
        props.setUrl(newUrl)
    }
    if (topic && numQuestions) {
        updateFetchUrl()
    }

    return (
        <>
            <span className={cn('text-white font-bold text-4xl text-center w-full block p-3')}>Chose a category</span>
            <div className="md:flex justify-center items-center flex-col">
                {!topic &&
                    topics.map((topic: any, index: number) => (
                        <button
                            //className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
                            className={`${styles.QuestionOption} ${btnClassesList}`}
                            //style={tealBtn}
                            //onClick={() => props.checkAnswer(props.answerOption.isCorrect)}
                            onClick={() => updateTopic(topic.value)}
                        >
                            {topic.title}
                        </button>
                    ))}
                {topic &&
                    questionAmounts.map((questionAmount: string, index: number) => (
                        <button
                            //className={`${styles.QuestionOption} text-white font-bold py-2 px-4 rounded bg-teal-600 w-3/5 m-3 text-2xl border-4 border-teal-600 hover:bg-transparent`}
                            className={`${styles.QuestionOption} ${btnClassesList}`}
                            //style={tealBtn}
                            //onClick={() => props.checkAnswer(props.answerOption.isCorrect)}
                            onClick={() => updateNumQuestions(questionAmount)}
                        >
                            {questionAmount}
                        </button>
                    ))}
            </div>
        </>
    )
}

export default ChoseTopic
