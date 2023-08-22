import React from "react";
import ReactDOM from "react-dom/client"; // Importing the ReactDOM client
import App from "./App.jsx"; // Importing your main application component
import "./styles/index.css"; // Importing global styles

// Using the createRoot API to render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
