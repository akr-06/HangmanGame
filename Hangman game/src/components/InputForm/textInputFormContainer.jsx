import { useNavigate } from "react-router-dom"
import TextInputForm from "./textInputForm.jsx"
import { useState } from "react"
import { getRandomWord } from "../../Utility/getRandomWord.js"

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password")
    const [inputValue, setInputValue] = useState("")

    const navigate = useNavigate()

    function handleFormSubmit(event) {
        event.preventDefault();
        if (inputValue) {
            navigate("/play", { state: { value: inputValue } })
        } else {
            const fruit = getRandomWord()
            setInputValue(fruit)
            navigate("/play", { state: { value: fruit } })
        }
    }

    function handleInputChange(event) {
        setInputValue(event.target.value)
    }

    function handleShowHideClick() {
        if (inputType === "text") {
            setInputType("password")
        } else if (inputType === "password") {
            setInputType("text")
        }
    }

    return (
        <TextInputForm handleInputChange={handleInputChange} showOrHideText={inputType === 'text' ? 'Hide' : 'Show'} inputType={inputType} handleFormSubmit={handleFormSubmit} handleShowHideClick={handleShowHideClick} />

    )
}

export default TextInputFormContainer
