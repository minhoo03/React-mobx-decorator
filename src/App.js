import './App.css';
import Counter2 from './Counter2';
import CounterStore from "./store/CounterStore";

const myCounter = new CounterStore()

function App() {
  return (
    <div className="App">
      <Counter2 counter={myCounter} />
    </div>
  );
}

export default App;
