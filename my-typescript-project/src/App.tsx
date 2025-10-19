import React from 'react';
import MyClassComponent from './MyClassComponent'
import './App.css';
import Button from './Button';
import Cards from  './Cards';

function App() {
  return (
    <><MyClassComponent />
    // <>
    // <Button name="A" />
    // <Button name="B" />
    // <Button name="C"/>
    // <Button name="D"/>
    // </>
    
    <div >
      <Cards name="Monika" skill="React, TypeScript" college="VIT" />
      <Cards name="siri" skill="Python, ML" college="NIT" />
      <Cards name="sai" skill="UI/UX, Figma" college="SRM" />
    </div>
    </>
  )
   

}

export default App;
