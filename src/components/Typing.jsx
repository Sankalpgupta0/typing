import React from 'react'
import Header from './Header'
import Timer from './Timer'
import TypingArea from './TypingArea'
import { useDispatch,useSelector } from 'react-redux'
import { completed } from '../store+slice/timerSlice'
import Result from './Result'
import Footer from './Footer'

const Typing = () => {
    
    const theme = useSelector((state) => state.ThemeReducer.theme)
    // const dispatch = useDispatch((state) =>  state.timerReducer.iscompleted);
    return (
        <>
        <div className={`${theme == 'default' ? "bg-[#111]" : theme=='dark' ? "bg-black" : "bg-[#f6e4a4]"} lg:hidden h-screen w-screen text-xl flex justify-center items-center text-white `}>
            <hr />This Site is to test you typing speed on keyboard <br /> So please open in Laptop <hr />
        </div>
            <div className={`${theme == 'default' ? "bg-[#111]" : theme=='dark' ? "bg-black" : "bg-[#fcf1c7]"} max-lg:hidden h-screen w-screen bg-[#111] p-10 rounded-xl border-2 border-white`}>
                <Header/>
                <Timer/>
                <TypingArea />
                <Footer />
            </div>
        </>
    )
}

export default Typing