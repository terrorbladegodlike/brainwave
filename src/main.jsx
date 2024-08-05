import React from "react";
import ReactDOM from "react-dom/client";

// Import App File
import App from "./App.jsx";

// Import CSS Styles
import "./index.css";

// Import Router from React-Router-DOM
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
