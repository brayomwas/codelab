import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 40px;
    font-weight: 400;
    color: #011638;
`;


export default function DocumentHeading(props) {
return <StyledHeading>{props.text}</StyledHeading>
}