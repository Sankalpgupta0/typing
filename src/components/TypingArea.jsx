import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { start, timer, completed } from '../store+slice/timerSlice';
import Result from './Result';
import KeyboardShortcuts from './KeyboardShortcuts';

const TypingArea = () => {
    const [blur, setBlur] = useState(true);
    const [typed, setTyped] = useState("");
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [error, setError] = useState(0);

    const starting = useSelector((state) => state.timerReducer.starting)
    const iscompleted = useSelector((state) => state.timerReducer.iscompleted)
    const time = useSelector((state) => state.timerReducer.time)
    const theme = useSelector((state) => state.ThemeReducer.theme)

    const texts = [
        "In a village by the sea the harmonious dance of waves against the shore whispers stories of ancient mariners whose legends are etched in the sands of time waiting to be discovered by the curious and the brave Technology has woven itself into the fabric of society crafting a tapestry of innovation and progress that pushes the boundaries of whats possible turning yesterdays dreams into todays reality",
        "Beneath the canopy of a starlit sky a lone wanderer travels guided by the constellations that have illuminated the path of adventurers since time immemorial seeking answers that lie beyond the horizon In the realm of fantasy dragons soar above enchanted castles their scales shimmering in the sunlight as knights and wizards unite to protect the kingdom from the shadows that lurk in the forest deep",
        "The art of cooking is a symphony of flavors where each ingredient plays a crucial role in the creation of culinary masterpieces and chefs like conductors bring harmony to the chaos of the kitchen As the seasons change nature paints the world with a palette of colors from the vibrant blooms of spring to the golden hues of autumn each brushstroke a reminder of the earths ever evolving beauty",
        "In the heart of the bustling city the rhythm of life moves to the beat of hurried footsteps and the melody of distant sirens a symphony of sounds that tells the story of urban existence Philosophy explores the depths of human thought navigating the sea of questions that have puzzled minds since the dawn of consciousness in search of the lighthouse of truth on the shores of reason",
        "The pursuit of knowledge is a journey through the pages of history where each chapter reveals the triumphs and trials of humanity and the lessons of the past light the way for the future In the silence of the library books stand as guardians of wisdom their pages portals to countless worlds waiting for the next reader to uncover the secrets and stories nestled within their bindings",
        "In a bustling city under the bright sun a curious cat chased a red ball down the narrow alley Suddenly a loud crash echoed through the streets as a glass bottle shattered on the pavement People stopped to stare their faces a mix of surprise and amusement The cat unfazed continued its playful pursuit weaving through legs and obstacles with grace Birds chirped overhead adding to the cacophony of urban sounds",
        "As the day turned to dusk the city lights flickered on casting a warm glow over the scene painting the sky in hues of orange and pink The quick brown fox jumps over the lazy dog",
    ]
    let textArr = texts[index].toLowerCase().split(''); 

    const handleMouseEnter = () => {
        setBlur(false);
    };
    const handleMouseLeave = () => {
        if(typed.length < 1)
            setBlur(true);
    };

    const random = () => {
        const x = Math.floor(Math.random() * texts.length);
        setIndex(x);
        return x;
    }

    useEffect(() => {
        if (typed.length >= 5) {
            setBlur(true);
            setTyped("");
            dispatch(timer(time));
            random();
        }
        if(typed.length < 1){
            random();
        }
    }, [starting])

    useEffect(() => {
        if (iscompleted == false) {
            setTyped("");
            dispatch(timer(time));
            textArr = "";
            setSpeed(0)
            setError(0)
        }
    }, [iscompleted]);

    const dispatch = useDispatch();
    const typingHandler = (e) => {
        setTyped(e.target.value);
        if (typed.length == 1 && starting == false)
            dispatch(start(true))

    }

    const typingChecker = (e) => {
        if (e.key == " ")
            setSpeed(speed + 1);
        if (typed.length == texts[index].length - 1) {
            setTyped("")
            setBlur(true);
            dispatch(completed(true));
        }
    }
    useEffect(() => {
        if( typed.length > 0 && typed[typed.length-1] == textArr[typed.length-1]){
            const lett = document.querySelector(`.san${typed.length-1}`);
            if(theme == 'default'){
                lett.classList.remove('word');
                lett.classList.remove('red');
                lett.classList.add("green");
            }
            else if(theme == 'dark'){
                lett.classList.remove('darkWord');
                lett.classList.remove('red');
                lett.classList.add("darkGreen");
            }
            else{
                lett.classList.remove('lightWord');
                lett.classList.remove('red');
                lett.classList.add("lightGreen");

            }
            
        } else if( typed.length > 0 && typed[typed.length-1] != textArr[textArr.length-1]) {
            const lett = document.querySelector(`.san${typed.length-1}`);
            setError(error+1);
            if(theme == 'default'){
                lett.classList.remove('green');
                lett.classList.remove('word');
                lett.classList.add("red");
            }
            else if(theme == 'dark'){
                lett.classList.remove('darkGreen');
                lett.classList.remove('darkWord');
                lett.classList.add("red");
            }
            else{
                lett.classList.remove('lightGreen');
                lett.classList.remove('lightWord');
                lett.classList.add("red");

            }
            
        }
    },[typed])


    return (
        <>
            <div className=' relative h-3/5 w-full px-10 flex flex-col my-5 items-center rounded-xl border border-[#303436]  max-lg:h-3/4 ' aria-disabled={blur}>
                <div className='my-5 absolute top-5 px-10 text-left'>
                {
                    textArr.map((letter, index) => {
                        return <h1 className={` z-10 ${blur ? "blur-sm" : ""} text-3xl max-lg:text-xl letter firaCode ${theme == 'default' ? "word" : theme=='dark' ? "darkWord" : "lightWord"} san${index}`} key={index}>{letter.toLowerCase()}</h1>
                    })
                }
                </div>

                <label
                    htmlFor="typing"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={` absolute bottom-5 rounded-2xl  border border-[#303436] w-[80%] h-20 my-5 cursor-pointer flex justify-center items-center flex-col firaCode  ${theme == 'default' ? "text-gray-300" : theme=='dark' ? "text-gray-500" : ""} `}
                ><p>Point cursor here to focus</p>
                    <p>Click to start</p>
                </label>
                <textarea
                    id='typing'
                    type='text'
                    className='input firaCode border-none outline-none cursor-default absolute top-5 my-5 text-3xl max-lg:text-xl text-left text-transparent w-full bg-transparent px-10 h-3/5 z-0'
                    value={typed}
                    onChange={(e) => typingHandler(e)}
                    disabled={blur}
                    onKeyDown={typingChecker}
                />

            </div>
            <ul className='text-slate-600 flex flex-col items-center'>
                <li className='text-slate-600'>Timer will start automatically as You start typing </li>
                <li className='text-slate-600'><KeyboardShortcuts ramdom={random} /></li>
            </ul>
            <div className={`flex justify-center ${iscompleted ? "" : "hidden"}`}>
                <Result error={error} speed={speed} length='100' />
            </div>
        </>
    )
}

export default TypingArea