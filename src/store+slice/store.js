import {configureStore} from '@reduxjs/toolkit';
import timerSlice from './timerSlice';
import ThemeSlice from './ThemeSlice';

const store = configureStore({
    reducer: {
        timerReducer : timerSlice, 
        ThemeReducer   : ThemeSlice
    }
});

export default store;