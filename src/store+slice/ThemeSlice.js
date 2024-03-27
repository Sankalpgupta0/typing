import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    theme : "default"
}

let ThemeSlice = createSlice({
    name: "ThemeReducer",
    initialState,
    reducers: {
        themeChanger : (state, actions) => {
            state.theme = actions.payload;
            console.log(state.theme);
        }
    }
})

export const { themeChanger } = ThemeSlice.actions;
export default ThemeSlice.reducer;
