import TextInputFormContainer from '../components/InputForm/textInputFormContainer'
function StartGame() {

    return (
        <>
            <h1>Start Game - Guess the word</h1><br />
            <h2><b>Note:</b> If you don`t enter any word a random <b>fruit</b> name would be picked.</h2><br />
            <TextInputFormContainer></TextInputFormContainer>
        </>
    )
}

export default StartGame