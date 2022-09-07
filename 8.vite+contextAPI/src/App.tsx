import { createContext, useContext } from 'react';
import { useMyContext } from './hooks/useMyContext';

function App() {
  return <AwesomeComponent value="Hello" />;
}

export default App;

type valueProps = { value: string };

function AwesomeComponent({ value }: valueProps) {
  return (
    <div>
      {value}
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
}

function FirstComponent() {
  return <div>First</div>;
}

function SecondComponent() {
  return <div>Second</div>;
}

function ThirdComponent() {
  const value = useMyContext();
  return <div>{value}</div>;
}
