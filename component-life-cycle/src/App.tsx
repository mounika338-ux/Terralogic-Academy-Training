import React from 'react';

import ClassLifecycleDemo from './ClassLifeCycleDemo';
import FunctionalLifecycleDemo from './FunctionalLifeCycleDemo';
import PostAxios from './PostAxios';

function App() {
  return (
    <div className="App">
      <ClassLifecycleDemo/>
      <FunctionalLifecycleDemo/>
      <PostAxios />
    </div>
  );
}

export default App;
