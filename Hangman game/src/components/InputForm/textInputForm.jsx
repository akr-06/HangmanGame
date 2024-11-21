import Button from "../Button/Button.jsx";
import TextInput from "../TextInput/textInput.jsx";

function TextInputForm({ handleInputChange, inputType, handleFormSubmit, handleShowHideClick, showOrHideText }) {

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <TextInput inputChange={handleInputChange} inputType={inputType} />
                </div>
                <div className="px-2 py-2">
                    <Button text={showOrHideText} styleType='warning' handleClick={handleShowHideClick} />

                    <Button text='Submit' styleType='success' buttonType='submit' />
                </div>
            </form>
        </>
    )
}

export default TextInputForm;