import getButtonStyle from "./styleButton.js"

function Button({ text, styleType = 'primary', buttonType = 'button', handleClick }) {

    return (
        <button
            className={`px-4 py-2 ${getButtonStyle(styleType)}`}
            type={buttonType}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button