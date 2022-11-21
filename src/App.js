
import './App.css';
import Buttons from './components/Buttons';
import { pokedex } from "./imgsArr";
function App() {
  return (
    <div className="App">
    <div className="App">{pokedex}</div>;
      <Buttons></Buttons>
    </div>
  );

}

export default App;
