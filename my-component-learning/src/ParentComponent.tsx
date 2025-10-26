import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const handleChildClick = () => {
    alert('Alert from Child Component');
  };

  return (
    <div>
      <ChildComponent onButtonClick={handleChildClick} />
    </div>
  );
};

export default ParentComponent;
