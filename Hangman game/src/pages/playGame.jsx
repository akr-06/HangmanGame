import { Link, useLocation } from "react-router-dom"
import MaskedText from "../components/MaskedText/maskedtext.jsx"
import InputLetterButton from "../components/LetterButtons/inputLetterButtons.jsx"
import { useState } from "react"
import HangMan from "../components/HangMan/hangMan.jsx"

function PlayGame() {
    const { state } = useLocation()
    const [guessedLetters, setguessedLetters] = useState([])
    const [step, setStep] = useState(0)

    function handleLetterClick(letter) {
        if (!state.value.toUpperCase().includes(letter)) {
            setStep(step + 1)
        }
        setguessedLetters([...guessedLetters, letter])
    }

    return (
        <>
            <div>
                <h1>Play Game</h1>
                <p>Every wrong guess will ultimately lead to hanging a man.</p>
                <div>
                    <MaskedText text={state.value} guessedLetters={guessedLetters} />
                </div><br />
                <div>
                    <InputLetterButton text={state.value} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />
                </div>
                <br />
                <div>
                    <HangMan step={step} />
                </div>
                <Link to="/" className='text-blue-400'>Back to Start Game</Link>
            </div>
        </>
    )
}

export default PlayGame