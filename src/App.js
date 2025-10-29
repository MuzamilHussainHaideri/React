import './App.css';
import styles from './Button.module.css';
import { Greet } from './components/Greet';
import { Counter } from './components/Counter';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { Stylesheet } from './components/Stylesheet';
import { Inline } from './components/Inline';

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
      <div>
        <UserGreeting />
      </div>
      <div>
        <NameList />
      </div>
      <div>
        <Stylesheet />
      </div>
      <div>
        <Inline />
      </div>
      <div>
        <button className={styles.btn}>Click</button>
      </div>
    </div>
  );
}

export default App;
