import React from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: #304067;
    color: #fff;
    
    a {
        padding: 15px;
        color: #ffd;
        text-decoration: none;
        height: 100%;
        
        &:hover {
            background-color: #315d85;
        }
    }
       
    ul {
        display: flex;
        list-style: none;
        margin: 0;
    }
    
    li {
        display: flex;

        .active {
            color: #84b2b8;
        }
    }
`;

const Navigation = () => {

    return (
        <StyledNavigation>
            <Link to="/">JavaScript Frameworks - MA3</Link>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/news" activeClassName="active">News</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            </ul>
        </StyledNavigation>
    );
};

export default Navigation;