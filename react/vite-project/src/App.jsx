import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About/About';
import Footer from './components/Footer/Footer';


function App(){

  let[count,setCount] = useState(0);
  const ChangeCointer = ()=>{
    setCount(count+1);
  }

  return(
    <>
    
    <button onClick={ChangeCointer}>hashem mohanad clicks{count}</button>

    </>
    
   



  );


 }



export default App;