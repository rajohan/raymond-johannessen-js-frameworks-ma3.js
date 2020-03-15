import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
    background-color: #fafafa;
    text-align: center;
    padding: 10px;
    margin: 0;
`;

const Heading = ({content}) => {

    return (
        <StyledHeading>
            {content}
        </StyledHeading>
    );
};

export default Heading;