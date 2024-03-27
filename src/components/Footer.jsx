import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { themeChanger } from '../store+slice/ThemeSlice';

const Footer = () => {
    const[theme, setTheme] = useState('default');
    const dispatch = useDispatch();

    return (
        <>
            <select
            defaultValue={theme} 
            onChange={(e) => {
                setTheme(e.target.value)
                dispatch(themeChanger(e.target.value))
            }}
            className='bg-black text-white rounded-2xl outline-none absolute bottom-10 right-10 px-3 py-1'
            >
                <option value="default">default</option> 
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option> 

            </select>
    
        </>
    )
}

export default Footer