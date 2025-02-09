import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../features/themeSlice"
import authReducer from "../features/authSlice"
import { authenticationApi } from '../services/authentication'
import { setupListeners } from '@reduxjs/toolkit/query'
import { blogApi } from '../services/blog'


const store = configureStore({
    reducer: {
        theme: themeReducer,
        auth: authReducer,
        [authenticationApi.reducerPath]: authenticationApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authenticationApi.middleware).concat(blogApi.middleware)
})


setupListeners(store.dispatch)


export default store;