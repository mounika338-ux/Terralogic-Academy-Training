import ArrayTraversal from './ArrayTraversal';
import ButtonCheckComponent from './buttonCheck';
import ClassComponent from './ClassComponent';
import ConditionalRendering from './ConditionalRendering';
import DataBindingComponent from './DataBindingComponent';
import Greetings from './Greetings';
import IncrementComponent from './IncrementComponent';
import ListUsage from './ListUsage';
import ParentComponent from './ParentComponent';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div>
     <ButtonCheckComponent />
     <IncrementComponent />
     <ClassComponent />
     <DataBindingComponent/>
     <ParentComponent/>
      <WelcomeMessage isLoggedIn={false} />
      <Greetings isLoggedIn={true} isAuthorized={true} />
      <ConditionalRendering isLoggedIn={false}/>
      <ListUsage/>
      <ArrayTraversal/>

    </div>
  );
}

export default App;
