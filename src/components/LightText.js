import React from 'react';
import styled from 'styled-components';

const StyledLightText = styled.h6`
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300&family=Nunito:wght@300&display=swap');
    font-family: 'Alegreya Sans', sans-serif;
    font-weight: 300;
`;

export default function LightText(props) {
return <StyledLightText>{props.text}</StyledLightText>
}