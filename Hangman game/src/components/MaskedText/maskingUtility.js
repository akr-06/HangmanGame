export function getAllCharacters(originalWord, guessedLetter) {
    guessedLetter = guessedLetter.map((letter) => letter.toUpperCase())
    const guessedLetterset = new Set(guessedLetter)

    const result = originalWord.toUpperCase().split('').map(char => {
        if (guessedLetterset.has(char)) {
            return char
        } else {
            return '_'
        }
    })

    return result

}