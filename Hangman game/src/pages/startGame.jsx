import TextInputFormContainer from '../components/InputForm/textInputFormContainer'
function StartGame() {

    return (
        <>
            <div className='text-center text-2xl'>
                <h1 >Game - Guess the word</h1><br />
                <h2><b>Note:</b> If you don`t enter any word a random <b>fruit</b> name will be picked.</h2><br />
                <TextInputFormContainer></TextInputFormContainer>
            </div>
        </>
    )
}

export default StartGame