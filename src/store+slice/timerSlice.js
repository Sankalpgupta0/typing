import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    time : 60,
    starting : false,
    iscompleted : false,
}

let timerSlice = createSlice({
    name: "timerReducer",
    initialState,
    reducers: {
        timer: (state, actions) => {
            state.time = actions.payload;
        },
        start : (state, actions) => {
            state.starting = actions.payload;
        },
        completed : (state, actions) => {
            state.iscompleted = actions.payload;
        },
    }
})

export const { timer, start, completed } = timerSlice.actions;
export default timerSlice.reducer;
