import React from "react";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fafafa;
    width: 100%;
    padding: 20px;
    margin: 20px 0;
    
    .error {
        color: #fff;
        background-color: #ff4e42;
        padding: 10px;
        margin: 0 0 10px 0;
        width: 200px;
        border-radius: 3px;
    }
    
    input {
        padding: 10px;
        width: 200px;
        margin-bottom: 10px;
        border: 1px solid #304067;
        background-color: #efefef;
    }
    
    button {
        width: 200px;
        background-color: #304067;
        color: #fff;
        border: none;
        padding: 10px;
        margin-top: 10px;
        cursor: pointer;
        
        &:hover {
            background-color: #326b94;
        }
    }
`;

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters")
});

const LoginForm = () => {
    const {register, handleSubmit, errors} = useForm({
        validationSchema: schema
    });

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="username" placeholder="Username" ref={register}/>
            {errors.username && <p className="error">{errors.username.message}</p>}
            <input type="password" name="password" placeholder="Password" ref={register} />
            {errors.password && <p className="error">{errors.password.message}</p>}
            <button>Login</button>
        </StyledForm>
    );
};

export default LoginForm;