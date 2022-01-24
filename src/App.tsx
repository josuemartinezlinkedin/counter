import * as React from 'react';
import axios from 'axios';
import "./styles.css";

/*npm example of how to use axios
axios.get('/user?ID=12345')
.then(function(response) {
    //handle success
    console.log(response);
})
.catch(function (error){
    //handle error
    console.log(error);
})
.then(function(){
    //always executed
});

API we'll be using: https://randomuser.me/api

*/

const {useState} = React;

const gettingInData = () => {
    return axios.get('https://randomuser.me/api')
        .then(res => {
            //handle success
            console.log(res);
            return res;
        })
        .catch(err => {
            //handle error
            console.error(err);
        });
}



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
        <button onClick={()=> {
            gettingInData();
        }}>add one</button>
        </div>
    );
}


