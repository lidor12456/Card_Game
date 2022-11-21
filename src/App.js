
import './App.css';
import Buttons from './Components/Buttons';
import Headers from './Components/Headers';


import Footer from "./Components/Footer";
import "./App.css";



function App() {
  return (
    
    <div className="App">


      <Headers Gamepageheader=" Memory Game" ></Headers>
      <Headers ResultsgamePageHeader="Results page"></Headers>
      <Headers Winningmesssage="You Won "></Headers>
      <Headers YouloseHeader="You Lose "></Headers>
     <Headers  Welcomepageheader="Welcome to Memory Game"></Headers>
        <Buttons/>
        <SingleCard/>
        <Footer />

          </div>

  
  );

}

export default App;
