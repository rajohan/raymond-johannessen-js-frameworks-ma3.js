import React from "react";
import {Switch, Route} from "react-router-dom";

import Container from "./Container";
import Home from "./Home";
import News from "./News";
import Login from "./Login";
import Navigation from "./Navigation";

const Layout = () => {

    return (
        <React.Fragment>
            <Navigation />
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/news">
                        <News />
                    </Route>
                </Switch>
            </Container>
        </React.Fragment>
    );
};

export default Layout;