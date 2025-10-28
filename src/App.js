import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name = "Muzamil" age = {20} />
      <Greet name = "Husain" age = {21} />
      <Greet name = "Hideri" age = {22} />
    </div>
  );
}

export default App;
