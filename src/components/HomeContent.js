import React from "react";
import styled from "styled-components";

const StyledHomeContent = styled.div`
    background-color: #fafafa;
    margin: 20px 0;
    width: 100%;
    padding: 20px;
`;

const HomeContent = ({children}) => {

    return (
        <StyledHomeContent>
            {children}
        </StyledHomeContent>
    );
};

export default HomeContent;