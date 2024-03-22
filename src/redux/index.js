import { configureStore } from "@reduxjs/toolkit"
import { combineReducers,applyMiddleware } from "redux"
import LoginSlice from "./slices/Login"
import thunk from "redux-thunk"
const reducer = combineReducers({
    LoginSlice,
})

const store = configureStore({
reducer
},applyMiddleware(thunk))

export default store