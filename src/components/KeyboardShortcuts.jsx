import React, { useEffect } from 'react';
import { completed } from '../store+slice/timerSlice';
import { useDispatch } from 'react-redux';

function KeyboardShortcuts({ramdom}) {
    const displatch = useDispatch()
    useEffect(() => {
        // Define the shortcut action
        const handleShortcut = (event) => {
            // Example: Ctrl + B
            if (event.ctrlKey && event.key === 'b') {
                event.preventDefault();
                ramdom();
                displatch(completed(false))
            }
        };

        // Attach the event listener
        window.addEventListener('keydown', handleShortcut);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('keydown', handleShortcut);
        };
    }, []);

    return (
        <div>
            <span className='text-slate-600 bg-slate-400 px-2 py-1 rounded-md'>ctrl</span> + <span className='text-slate-600 bg-slate-400 px-2 py-1 rounded-md' >b</span> - change para
        </div>
    );
}

export default KeyboardShortcuts;
