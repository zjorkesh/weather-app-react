import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="weather-wrapper">
        <form id="search-form" className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="input-form"
                id="city-input"
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <hr />
        <h1 id="city">Enter a city</h1>
        <h2 id="date">Current date</h2>
        <div className="row">
          <div className="col-6">
            <div className="temperature-container">
              <img src="" alt="" id="icon" />

              <span id="temperature"></span>
              <span className="temperature-units" id="celsius-link">
                <a href="#" target="_blank" rel="noreferrer">
                  °C
                </a>
              </span>
            </div>

            <div className="feel-temperature">
              <span>Feels like </span>
              <strong>
                <span id="feels-temperature"></span>
                <span>
                  <sup>°C</sup>
                </span>
              </strong>
            </div>
          </div>

          <div className="col-6 d-flex justify-content-end">
            <ul className="condition">
              <strong>
                <li id="description" style={{ color: "#0069d9" }}></li>
              </strong>
              <li>
                humidity: <span id="humidity"></span>%
              </li>
              <li>
                Wind: <span id="wind-speed"></span> km/h
              </li>
            </ul>
          </div>
        </div>
        <div id="forecast"></div>
        <hr />
        <div className="host">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/25647-zeinab-jorkesh"
              className="coder"
              id="name"
              target="_blank"
              rel="noreferrer"
            >
              Zeinab Jorkesh
            </a>{" "}
            and is on{" "}
            <a
              href="https://github.com/zjorkesh/weather-app-react"
              className="coder"
              id="github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://weather-app-react-base.netlify.app"
              className="coder"
              id="netlify"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
