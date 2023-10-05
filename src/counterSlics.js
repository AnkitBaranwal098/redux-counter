import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0,
    },
    reducers : {
        increementCounter : (state)=>{
            state.value = state.value+1
        },
        decreementCounter : (state)=>{
            if(state.value){
                state.value = state.value-1
            }
        },
        resetCounter : (state)=>{
            state.value = 0;
        }
    }
});


export default counterSlice.reducer;
export const {increementCounter, decreementCounter, resetCounter} = counterSlice.actions; 