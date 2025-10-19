
import React from 'react'

const Button = (props:{name:string}) => {
    const {name}=props;
  return (
    <div>
        <button
        style={{
            backgroundColor:"gray",
            padding:"auto",
            marginLeft:"10px",
            marginBottom: "20 px"
        }}
        className=''
        >
        {name}
        </button>
        

    </div>
  )
}

export default Button
