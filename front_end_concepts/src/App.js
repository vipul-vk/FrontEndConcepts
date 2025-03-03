//import logo from './logo.svg';
import './App.css';
import Greet from './components/DestructuringOfPropsAndState /Greet';
import Welcome from './components/DestructuringOfPropsAndState /Welcome';
import Hello from './components/JSX/Hello';
import Message from './components/setState()/Message';
import Counter from './components/setState()/Counter';
import FunctionClick from './components/EventHandling/FunctionClick';
import ClassClick from './components/EventHandling/ClassClick';
import EventBind from './components/EventBinding/EventBind';
import ParentComponent from './components/childToParent/ParentComponent';
import NameList from './components/ListRendering/NameList';
import PersonList from './components/ListRendering/PersonList';
import ClickCounter from './components/HighOrderComponent/ClickCounter';
import HoverCounter from './components/HighOrderComponent/HoverCounter';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
import CounterTwo from './components/RenderProps/Counter';
import ComponentC from './components/ReactContext/ComponentC';
import { UserProvider } from './components/ReactContext/userContext';
import HookCounter from './components/Hooks/StateHooks/HookCounter';
import UseStateWithObject from './components/Hooks/StateHooks/UseStateWithObject';
import UseStateWithArray from './components/Hooks/StateHooks/UseStateWithArray';
import EffectHook from './components/Hooks/EffectHooks/EffectHook';
import HookMouse from './components/Hooks/EffectHooks/HookMouse';
import MouseContainer from './components/Hooks/EffectHooks/MouseContainer';

function App() {
  return (
    <div className="App">
      <h1>Props using functional component</h1>
      <Greet name="bruce">
        <p>This is child props</p>
      </Greet>
      <Greet name="pandey">
        <button>Action</button>
      </Greet>
      <h1>Props using class component</h1>
      <Welcome name="abc">
        <p>This is child props</p>
      </Welcome>
      <Welcome name="xyz">
        <button>Action</button>
      </Welcome>
      <Hello/>
      <Message/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <NameList/>
      <PersonList/>
      <h2>------------------------------------HighOrderComponent-------------------------------------------</h2>
      <ClickCounter name='Viswas'/>
      <HoverCounter user='Yoru'/>


      <h2>------------------------------------Render Props--------------------------------------------------</h2>
      <CounterTwo
        render = {(count, incrementCount ) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render = {(count, incrementCount ) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      {/* we can use this as children prop also like below
      <CounterTwo>
      {(count, incrementCount ) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </CounterTwo>

      But then in CounterTwo.js we need to change this.props.render() function to this.props.children()
       */}

      <UserProvider value='Vishwas'>
        <ComponentC/>
      </UserProvider>

      <HookCounter/>
      <UseStateWithObject/>

      <UseStateWithArray/>
      <EffectHook/>
      {//<HookMouse/>
      }
      <MouseContainer/>

     

    </div>
  );
}

export default App;
