import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {start, completed} from '../store+slice/timerSlice'

const Timer = () => {
    const time = useSelector((state) => state.timerReducer.time);
    const starting = useSelector((state) => state.timerReducer.starting);
    const iscompleted = useSelector((state) => state.timerReducer.iscompleted)
    let [seconds, setSeconds] = useState(0);
    let count = 0;
    const dispatch = useDispatch();
        useEffect(() => {
            if(starting == true){

                const intervalId = setInterval(() => {
                    setSeconds(prev => prev+1);
                    count++;
                    if(count >= time){
                        dispatch(start(false))
                        dispatch(completed(true))
                        clearInterval(intervalId);
                    }
                }, 1000);
            } else{
                setSeconds(0);
                count = 0;
            }

        },[starting])

    return (
        <>
        <button 
        className='mx-[10vw] text-2xl firaCode backdrop-sepia bg-black/100 drop-shadow-3xl text-white px-5 py-2 rounded-xl max-lg:text-sm'>
            {time - seconds} sec
        </button>
        
        </>
    )
}

export default Timer