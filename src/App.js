import './App.css';
import { Greet } from './components/Greet';
import { Counter } from './components/Counter';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';

function App() {
  return (
    <div>
      <div className="App">
        <Greet name = "Muzamil" age = {20} />
        <Greet name = "Husain" age = {21} />
        <Greet name = "Hideri" age = {22} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <ClickHandler />
      </div>
      <div>
        <ParentComponent />
      </div>
    </div>
  );
}

export default App;
