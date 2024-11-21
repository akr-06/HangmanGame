const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

function InputLetterButton({ text, guessedLetters, onLetterClick }) {
    const originalLetters = new Set(text.toUpperCase().split(''))
    const guessedLettersSet = new Set(guessedLetters)

    function buttonStyle(letter) {
        if (guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`
        } else {
            return 'bg-blue-500'
        }
    }

    function handleClick(event) {

        const letter = event.target.value
        onLetterClick(letter)

    }

    const letterButton = alphabets.map(letter => {
        return (
            <button
                key={letter}
                value={letter}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
                disabled={guessedLettersSet.has(letter)}
                onClick={handleClick}
            >
                {letter}
            </button>
        )
    })

    return (
        <>
            {letterButton}
        </>
    )
}

export default InputLetterButton;