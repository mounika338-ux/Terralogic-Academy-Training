import React from 'react'
type IProps = {
   isLoggedIn: boolean;
   defaultProp?:boolean;
 }
const ConditionalRendering = (props:IProps) => {
    const{isLoggedIn,defaultProp="no val from parent"}=props
    console.log("defaultProp",defaultProp)

    const checkIfUserHasAccount=(hasAccount :boolean)=>{
        if(hasAccount)return<h1>user can login</h1>
    return<h1>user need to register</h1>
    }
    return (
    <div>{isLoggedIn ?<h1>yes,login</h1>:checkIfUserHasAccount(false)}</div>
  )
}

export default ConditionalRendering