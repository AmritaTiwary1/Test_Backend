import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')  // here, we can also use fetch but axios has many advantages , like here, we dont have to change respond into json, axios automatically do it 
    .then((response)=>{
       setJokes(response.data);
    }
  ).catch((err)=>{
    console.log(err);
  })
    
  })

  return (
    <>
     <h1>hello</h1>
     <p> JOKES : {jokes.length}</p>
     {
      jokes.map((joke , index)=>{
      return  <div key={joke.id} >
          <h3> {joke.joke}</h3>
          <p>{joke.punchline}</p>
        </div> 
      })
     }
    </>
  )
}

export default App
