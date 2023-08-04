import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"
import Counter from "./components/App"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Counter />
    </React.StrictMode>
);
