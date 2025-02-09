import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
        name: 'theme',
        initialState: {
                theme: localStorage.getItem("theme") || "light"
        },
        reducers: {
                toggleTheme: (state) => {
                        state.theme = state.theme === "dark" ? "light" : "dark";
                        localStorage.setItem("theme", state.theme);
                        
                }
        }
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer