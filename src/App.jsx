import * as React from 'react';
import axios from 'axios';
import "./styles.css";
import { useEffect, useState } from 'react';

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



const gettingInData = () => {
    return axios.get('https://randomuser.me/api')
        .then(({data}) => {
            //handle success
            console.log(data);
            return JSON.stringify(data);
        })
        .catch(err => {
            //handle error
            console.error(err);
        });
}

const getFullName = (infoUsers) =>{
    const {name: {first, last}} = infoUsers;
    return '${first} ${last}';
}

export default function App(){

    const [counter, setCounter] = useState(42);
    const [randomUserJSON, setRadomUserJSON] = useState('');
    const [infoFromUsers, setInfoFromUsers ] = useState([]);

    React.useEffect(() => {
        gettingInData().then(someData => {
        setRadomUserJSON(JSON.stringify(someData, null, 2) || 'No data found');
        setInfoFromUsers(someData.results);
        }) 
    }, [])

    return (
        <div className="App">
        <h1>Hello Coding Challenge</h1>
        <h2>
            {counter}
        </h2>
        <button onClick={()=> {
            setCounter(counter + 1);
        }}>add one</button>
        {
        infoFromUsers.map((infoFromUsers, idx) => (
            <div key={idx}>
            <p>{getFullName(infoFromUsers)}</p>
            <img></img>
            </div>
    ))
        }
        <pre>
            {randomUserJSON}
        </pre>
        </div>
    );
}


