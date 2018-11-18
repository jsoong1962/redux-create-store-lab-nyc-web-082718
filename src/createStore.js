import candyReducer from './reducers/candyReducer'
import countReducer from './reducers/countReducer'

export default function createStore(reducer) {
  // add your code here
}

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render()
  }

  dispatch({type:'@@INIT'})

  function getState() {
    return state;
  }
  return {dispatch,
         getState
       };
}

// let candyStore = createStore(candyReducer);
// let countStore = createStore(countReducer);
// candyStore.dispatch({ type: '@@INIT' })
// countStore.dispatch({ type: '@@INIT' })

function render() {
  const container = document.getElementById('container');


}
