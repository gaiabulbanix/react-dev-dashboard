import myLogo from './assets/bunny1.png';
import './Custom.css';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <h1>Hello, Gorby!</h1>
      <img src={myLogo} alt="Logo" width="150" />
      <Greeting name="Gorby" />
    </div>
  );
}

export default App;
