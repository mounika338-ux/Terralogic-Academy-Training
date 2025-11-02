import React from "react"
const MyInput=(props)=>{
    return(
        <div> 
            <label htmlFor={props.Id}>{props.label}</label>
            <input type={props.type} id={props.Id} value={props.value} onChange={props.onChange}/>{" "}
        </div>
    )
};


export default MyInput
