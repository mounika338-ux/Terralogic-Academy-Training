import React from 'react';

const ChildComponent = (props:any ) => {
  return (
    <div>
      <button onClick={props.onButtonClick}>Click Me</button>
    </div>
  );
};

export default ChildComponent;
