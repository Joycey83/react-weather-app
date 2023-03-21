import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Joycey83"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joyce Cheung
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Joycey83/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open sourced on Github {""}
          </a>
          and {""}
          <a
            href="https://myreactweatherapp88.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
