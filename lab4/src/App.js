import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';



const johnObj = {
  name: "John Harrison",
  age: 24,
  major: "INFO, COM",
  desc: "A cool guy",
  img: "./img/john image.jpg"
}


function App() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1)
  }

  const decrement = () => {
    setCount(count-1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hey, what a cool react app!
        </p>
        What does this number do? {count}
        <Card data={johnObj} increment={increment} decrement={decrement}/>
      </header>
    </div>
  );
}

export default App;
