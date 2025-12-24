import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./Weather.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by Andreia Ribeiro ·{" "}
          <a
            href="https://github.com/andreiapatriciaribeiro88-web/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open source
          </a>{" "}
          ·
        </footer>
      </div>
    </div>
  );
}
