import logo from './face.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello and welcome to kierans first web app</h1>
        <a
          className="App-link"
          href="https://www.facebook.com/kieran.hastings.94/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
