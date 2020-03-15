import React from "react";

import LoginForm from "./LoginForm";
import Heading from "./Heading";

const Login = () => {

    return (
        <React.Fragment>
            <Heading content="Login" />
            <LoginForm />
        </React.Fragment>
    );
};

export default Login;