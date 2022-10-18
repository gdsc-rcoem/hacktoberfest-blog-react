import './App.css';
import UserMusic from "./Components/UserMusic";
import UserCards from './UserCards';
import contributions from './data';


function App() {
  return (
    <div className="container">
        <UserCards contributors={contributions}/>
    </div>
  );
}

export default App;
