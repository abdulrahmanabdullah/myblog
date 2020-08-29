import React, { useReducer, useContext, createContext } from 'react';

const CountStateProvider = createContext();
const DispatchStateProvider = createContext();

const CountReducer = (state, action) => {
  switch (action.type) {
    case 'add': {
      return { ...state, count: state.count + 1 };
    }
    case 'remove': {
      return { ...state, count: state.count - 1 };
    }
    default:
      return state;
  }
};

const initState = { count: 0, isSave: false };

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountReducer, initState);
  return (
    <CountStateProvider.Provider value={state}>
      <DispatchStateProvider.Provider value={dispatch}>
        {children}
      </DispatchStateProvider.Provider>
    </CountStateProvider.Provider>
  );
};

const useCounterState = () => {
  const context = useContext(CountStateProvider);
  if (context === undefined) {
    throw new Error(' Context in null');
  }
  return context;
};

const useCounterDispatch = () => {
  const context = useContext(DispatchStateProvider);
  if (context === undefined) {
    throw new Error(' Context in null');
  }
  return context;
};
const Counter = () => {
  const dispatch = useCounterDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: 'add' })}>Increase </button>
      <button onClick={() => dispatch({ type: 'remove' })}>Decrease </button>
    </>
  );
};

const CountDisplay = () => {
  const { count } = useCounterState();
  return (
    <>
      <div> Count = {count}</div>
    </>
  );
};
const Root = () => {
  return (
    <CounterProvider>
      <Counter />
      <CountDisplay />
    </CounterProvider>
  );
};
export default Root;
