import React from "react";
import styled from "styled-components";

const StyledNewsList= styled.ul`
    margin: 20px 0;
    padding: 0;
    
    li {
        background-color: #fafafa;
        width: 100%;
        padding: 20px;
        list-style: none;
        margin: 20px 0;
        
        h2 {
            text-align: center;
            margin-top: 0;
        }
    }
    
`;

const NewsList = () => {

    return (
        <StyledNewsList>
            <li>
                <h2>News 1</h2>
                <p>
                    Proin semper mauris elit, vel congue ante pellentesque ac. Aliquam tincidunt orci eget lacus volutpat porta.
                    Morbi mattis justo eu nibh auctor semper. Nam vulputate bibendum vehicula.
                    Donec ullamcorper volutpat lorem, a maximus ex fermentum nec.
                    Sed eu erat at dui pharetra volutpat non a est. Suspendisse potenti.
                </p>
            </li>
            <li>
                <h2>News 2</h2>
                <p>
                    Nunc fringilla, leo sit amet efficitur pellentesque, nulla mauris consectetur ante, vel tristique lectus sem non purus.
                    Mauris lacinia ipsum mauris, at sodales lectus condimentum sed. In ut tortor et dui molestie bibendum.
                    Suspendisse luctus ligula magna, ac accumsan libero fringilla et. Aliquam accumsan vulputate neque, vitae consectetur nunc luctus non.
                    Maecenas vel metus nunc. Suspendisse quis efficitur lorem, id sagittis risus.
                </p>
            </li>
            <li>
                <h2>News 3</h2>
                <p>
                    Suspendisse volutpat id enim id sodales. Pellentesque auctor sit amet libero in faucibus.
                    Aenean elementum justo velit, eu sollicitudin odio posuere nec.
                    Curabitur gravida vestibulum urna, quis fringilla leo bibendum quis. In iaculis elit velit.
                    Praesent vitae sem iaculis, eleifend velit vitae, tempus tellus.
                    Nunc malesuada gravida lectus quis dignissim. Phasellus blandit ullamcorper dignissim.
                </p>
            </li>
        </StyledNewsList>
    );
};

export default NewsList;