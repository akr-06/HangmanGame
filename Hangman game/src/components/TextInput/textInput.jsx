function TextInput({ inputChange, inputType }) {


    return (
        <>
            <label>Enter the word: </label>
            <input
                type={inputType}
                placeholder='Enter your text here'
                className="px-4 py-2 border"
                onChange={inputChange}
            />

        </>
    )

}

export default TextInput