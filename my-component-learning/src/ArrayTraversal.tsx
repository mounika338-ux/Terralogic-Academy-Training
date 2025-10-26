import React from 'react'

const ArrayTraversal = () => {
  const items: any[] = ['first','second','third'];

  return (
    <div>
      <ol>
        {items?.map((val) => (
          <li >{val}</li>
        ))}
      </ol>
    </div>
  );
};

export default ArrayTraversal;


