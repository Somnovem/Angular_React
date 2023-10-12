import './App.css';
import ReactAdvantages from "./Components/react-advantages";
import Hello from "./Components/hello";
import Biography from "./Components/biography";
import City from "./Components/city";

function App() {
    const person = {
        fullname: 'Жмура Артем Анатолійович',
        phone: '+380969510899',
        email: 'artem.zhmura606@gmail.com'
    }
  return (
    <div className="App">
      <ReactAdvantages/>
      <Hello/>
      <Biography person={person}/>
      <City/>
    </div>
  );
}

export default App;
