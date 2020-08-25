import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
     @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 60px;
    font-weight: 300;
    color: #011638;
`;


export default function DocumentHeading(props) {
return <StyledHeading>{props.text}</StyledHeading>
}