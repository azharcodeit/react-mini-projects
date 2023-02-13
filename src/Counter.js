import { useReducer } from "react";
import './styles/counter.css'

const initialState = {count: 0}

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action){
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="app-container">
      <div className="temperature-display-container" style={{backgroundColor: state.count>15? '#ed682a': '#70b2e3'}}><h2>{state.count} °C</h2></div>
      <div className="temperature-control-buttons">
      <button className="control-button" onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
      <button className="control-button" onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      </div>
    </div>
  );
}

export default Counter;
