export function getRandomWord() {
    const words = ["apple", "banana", "orange", "grape", "watermelon", "pineapple", "pappaya"]

    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  }
  