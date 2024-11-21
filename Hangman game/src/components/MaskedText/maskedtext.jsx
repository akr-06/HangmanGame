import { getAllCharacters } from "./maskingUtility";


function MaskedText({ text, guessedLetters }) {
    const maskedString = getAllCharacters(text, guessedLetters);
    if (text.toUpperCase() === maskedString.join('')) {
        return <h2 className="text-4xl">Congratulations! You have guessed the word correctly.</h2>  // If the original word is guessed correctly, display a success message.
    }
    return (
        <>
            {maskedString.map((letter, idx) => {
                return (
                    <span key={idx} className="mx-1">
                        {letter}
                    </span>
                )
            })}
        </>
    )
}

export default MaskedText