import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlics";

const appStore = configureStore({
    reducer : {
        counter : counterReducer
    }
});


export default appStore;