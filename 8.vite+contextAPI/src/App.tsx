import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type Props = {
  children: React.ReactNode;
};

const CounterContext = createContext(0);

function CounterProvider({ children }: Props) {
  const [counterState, setCounterState] = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
}

function useCounterState() {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error('useCounterState should be used within CounterProvider');
  }
  return value;
}

const App = () => {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
};

// TODO: [Symbol.iterator]()' 메서드가 있어야 합니다. 해결할 것
function Value() {
  const [counter] = useCounterState();
  return <h1>{counter}</h1>;
}

// TODO: [Symbol.iterator]()' 메서드가 있어야 합니다. 해결할 것
function Buttons() {
  const [, setCounter] = useCounterState();
  const increase = () => setCounter((prev: number) => prev + 1);
  const decrease = () => setCounter((prev: number) => prev - 1);

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
