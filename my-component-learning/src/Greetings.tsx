
import React from 'react'

// type Props = {
//   isLoggedIn: boolean;
//   isAuthorized:boolean;
// }

function Greetings(props: any) {
  return (
    <div>
      {props.isLoggedIn ? (
        props.isAuthorized?
        <h1>ur not Authorized!</h1>:<h1>your not allowed</h1>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  )
}

export default Greetings
