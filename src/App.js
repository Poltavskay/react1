import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from React</h1>
        <br />
        <a href="https://shecodes.io/" target="_blank" rel="noreferrer">
          SheCodes
        </a>
        <img src="test.png" alt="SheCodes Logo" />
        <Weather city="Tokyo"/>
      </header>
    </div>
  );
}

export default App;
