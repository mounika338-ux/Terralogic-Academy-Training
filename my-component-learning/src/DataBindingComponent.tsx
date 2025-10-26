import React, { useState } from 'react';

const DataBindingComponent = () => {
  const [text, setText] = useState<string>('');
  const[password,setPassword]=useState('')

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log('submitting:',text)
    console.log('submitting password:',password)
  };
  const handleType=(e: any)=>{
    setText(e.target.value)
      console.log('typed character:',e.target.value)
  }
  const handlepassword=(e:any)=>{
    setPassword(e.target.value)
  }



return (
    <form onSubmit={(submitHandler)}>

      <input
        type="text" placeholder='enter your name'
        value={text}
        onChange={handleType}
      />
      <input type="password" placeholder='enter your password' value={password} onChange={handlepassword}/>

      <button>Submit</button>
    </form>
  );
};

export default DataBindingComponent;







    
  

  