import './App.css';
import EffectTutorial from './UseEffect/EffectTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import RefTutorial from './useRef/RefTutorial';
import  StateTutorial  from "./UseState/StateTutorial";
import ContextTutorial from './UseContext/ContextTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import CallBackTutorial from './useCallBack/CallBackTutorial';

function App() {
  return (
    <div className="App">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      {/* <EffectTutorial /> */}
      {/* <RefTutorial /> */}
      {/* <LayoutEffectTutorial /> */}
      {/* <ImperativeHandle /> */}
      {/* <ContextTutorial /> */}
      {/* <MemoTutorial /> */}
      <CallBackTutorial />
      
    </div>
  );
}

export default App;
