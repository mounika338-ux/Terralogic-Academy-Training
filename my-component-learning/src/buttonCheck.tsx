import React from 'react'

const ButtonCheckComponent= () =>{
    const handleClick=()=>{
        alert ('button was clicked!');
} ;
return(
    <button onClick={handleClick}>ClickMe</button>
);
}
export default ButtonCheckComponent;
 
