import React from 'react'

const Cards = (props:{name:string, skill:string, college:string}) => {
  return (
    <>
    <div className="container">
       <h1>My name is { props.name} </h1>
      <h1>my skills are { props.skill}</h1>
      <h1>my college is { props.college}</h1>
    </div>
    </>
  )
}
 
export default Cards