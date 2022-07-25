import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <greetingsF  name="MARTIN"/> 
        <greetingsF name="martin"></greetingsF>
      </header>
    </div>
  );
}

export default App;
