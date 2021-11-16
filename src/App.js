import logo from './logo.svg';
import './App.css';
import Favourites from './Sections/Favourites/Favourites';
import Data from './Sections/Data/Data';
import Control from './Sections/Control/Control';

function App() {
  return (
    <div className="App">
     <Favourites />
    <Control />
     <Data />
    </div>
  );
}

export default App;
