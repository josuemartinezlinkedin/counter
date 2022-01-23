import * as React from 'react';
import "./styles.css";

const {useState} = React;


export default function App(){

    const [counter, setCounter] = useState(42);

    return (
        <div className="App">
        <h1>Hello Coding Challenge</h1>
        <h2>
            {counter}
        </h2>
        <button onClick={()=> {
            setCounter(counter + 1);
        }}>add one</button>
        </div>


    );
}

