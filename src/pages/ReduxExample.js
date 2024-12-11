import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function ReduxExample() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    </div>
  );
}

export default ReduxExample;
