import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));