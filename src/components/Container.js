import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    margin: 0 20px;
    padding: 20px;
    max-width: 900px;
    width: 100%;
    color: #121212;
`;

const Container = ({children}) => {

    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    );
};

export default Container;