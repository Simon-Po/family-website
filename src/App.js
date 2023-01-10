
import Login from "./components/Login.js"
import { useState } from "react";
import MainPage from "./components/MainPage";

function App() {

  const [correct,setCorrect] = useState(false)

  return (
    <div >
      {(!correct) ? <Login setCorrect={setCorrect} /> :  <MainPage /> }

      
    </div>
    
  );
}

export default App;
