import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { HashRouter } from "react-router-dom/cjs/react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
