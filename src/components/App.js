import React from "react";
import {createGlobalStyle} from "styled-components";

import Layout from "./Layout";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding: 0;
        max-width: 100vw;
        overflow-x: hidden;
    }
    
    #root {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        background-color: #555555;
    }
`;

const App = () => {

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Layout />
        </React.Fragment>
    );
};

export default App;