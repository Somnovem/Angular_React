import './App.css';
import ShakespeareInfo from "./Components/shakespeare-info";
import ShakespearePoem from "./Components/shakespeare-poem";
import CounterBasic from "./Components/counter-basic";
import CounterBlock from "./Components/counter-block";

function App() {
  return (
    <div>
        <ShakespeareInfo/>
        <ShakespearePoem/>
        <CounterBasic/>
        <CounterBlock/>
    </div>
  );
}

export default App;
