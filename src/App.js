import './App.css';
import Buttons from './Components/Buttons';
import Headers from './Components/Headers';
function App() {
  return (
    
    <div className="App">
      <Buttons></Buttons>
      {/* Check if the headrs works  */}
      <Headers Gamepageheader=" Memory Game" ></Headers>
      <Headers ResultsgamePageHeader="Results page"></Headers>
      <Headers Winningmesssage="You Won "></Headers>
      <Headers YouloseHeader="You Lose "></Headers>
     <Headers  Welcomepageheader="Welcome to Memory Game"></Headers>

          </div>
  );
}

export default App;
