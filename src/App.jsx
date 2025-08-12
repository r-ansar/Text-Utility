import { useState } from 'react';
import './App.css';
import MyForm from './components/Form';
import MyNav from "./components/Navb"
function App() {
  const [Mode, setMode] = useState("light");
  if (Mode === "dark") {
      document.body.style.backgroundColor = "#121212"; // dark background
      document.body.style.color = "white"; // text color
  } else {
    document.body.style.backgroundColor = "#e0dfdfff"; // light background
    document.body.style.color = "black"; // text color
  }
  return (
    <>
      <MyNav Mode={Mode} setMode={setMode}/>
      <MyForm heading={"Enter Your Text Below"} Mode={Mode}/>
      
    </>
  );
}

export default App;