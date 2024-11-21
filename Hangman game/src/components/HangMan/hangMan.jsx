import level1 from '../../assets/Images/level-1.svg'
import level2 from '../../assets/Images/level-2.svg'
import level3 from '../../assets/Images/level-3.svg'
import level4 from '../../assets/Images/level-4.svg'
import level5 from '../../assets/Images/level-5.svg'
import level6 from '../../assets/Images/level-6.svg'
import level7 from '../../assets/Images/level-7.svg'
import level8 from '../../assets/Images/level-8.svg'

function HangMan({ step }) {

    const images = [level1, level2, level3, level4, level5, level6, level7, level8]

    function handleError(step) {
        if (step >= images.length - 1) {
            return (
                <p className='text-red-500 text-2xl'>Game Over! You lost the game.</p>
            )
        }
    }

    return (
        <>
            <div className='w-[300px] h-[300px] text-center'>
                <img src={step >= images.length ? images[images.length - 1] : images[step]} ></img>
                {handleError(step)}
            </div>

        </>
    )

}

export default HangMan