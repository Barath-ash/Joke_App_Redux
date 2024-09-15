import { configureStore } from "@reduxjs/toolkit";
import jokeSlice from "./jokeslice";

const Store = configureStore({
    reducer:{
        joke: jokeSlice.reducer
    }
})

export default Store