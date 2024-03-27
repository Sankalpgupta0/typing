import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { timer } from '../store+slice/timerSlice';

const Header = () => {
    const dispatch = useDispatch();
    const time = useSelector((state) => state.timerReducer.time);
    const theme = useSelector((state) => state.ThemeReducer.theme);

    return (
        <div className='flex justify-between mx-20 my-5 max-lg:mx-5 max-lg:text-sm '>
            <img src="../../../src/Assets/LOGO.png" alt="LOGO" className='h-12 rounded-lg'/>
            <div className={`flex gap-x-10 rounded-xl border ${theme == 'default' ? "border-white" : theme=='dark' ? "border-white" : "border-black"}  px-3 py-1 `}>
                <p className={`${theme == 'default' ? "text-white " : theme=='dark' ? "text-white" : ""}  px-5 py-2 rounded-lg`}> Select Timer ▶️ </p>
                <button 
                className={`${time == 10 ? ` ${theme == 'default' ? "text-yellow-400" : theme=='dark' ? "text-yellow-400" : "text-slate-800"}` : `${theme == 'default' ? "text-white" : theme=='dark' ? "text-white" : "text-black"}` } hover:text-yellow-400 hover:font-semibold `} 
                onClick={() => dispatch(timer(10))}
                >10s</button>
                <button 
                onClick={() => dispatch(timer(20))}
                className={`${time == 20 ? ` ${theme == 'default' ? "text-yellow-400" : theme=='dark' ? "text-yellow-400" : "text-slate-800"}` : `${theme == 'default' ? "text-white" : theme=='dark' ? "text-white" : "text-black"}` } hover:text-yellow-400 hover:font-semibold `}  
                >20s</button>
                <button 
                onClick={() => dispatch(timer(30))}
                className={`${time == 30 ? ` ${theme == 'default' ? "text-yellow-400" : theme=='dark' ? "text-yellow-400" : "text-slate-800"}` : `${theme == 'default' ? "text-white" : theme=='dark' ? "text-white" : "text-black"}` } hover:text-yellow-400 hover:font-semibold `} 
                >30s</button>
                <button 
                onClick={() => dispatch(timer(60))}
                className={`${time == 60 ? ` ${theme == 'default' ? "text-yellow-400" : theme=='dark' ? "text-yellow-400" : "text-slate-800"}` : `${theme == 'default' ? "text-white" : theme=='dark' ? "text-white" : "text-black"}` } hover:text-yellow-400 hover:font-semibold `} 
                >60s</button>
                <button 
                onClick={() => dispatch(timer(120))}
                className={`${time == 120 ? ` ${theme == 'default' ? "text-yellow-400" : theme=='dark' ? "text-yellow-400" : "text-slate-800"}` : `${theme == 'default' ? "text-white" : theme=='dark' ? "text-white" : "text-black"}` } hover:text-yellow-400 hover:font-semibold `}  
                >120s</button>
            </div>
        </div>
    )
}

export default Header