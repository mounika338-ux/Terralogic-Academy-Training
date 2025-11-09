import {INCREMENT,DECREMENT,RESET}from "./type";


export const increment=(amount)=>({
    type:INCREMENT,
    payload:amount+1,
});

export const decrement=(amount)=>({
    type:DECREMENT,
    payload:amount-1,
});

export const reset=()=>({
    type:RESET,
})

