import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SlideContextProvider from "./context/slide-context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SlideContextProvider>
      <App />
    </SlideContextProvider>
  </React.StrictMode>
);
