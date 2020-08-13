import React from 'react';
import styled from 'styled-components';

const StyledButtonText = styled.h6`
    @import url('https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300&family=Nunito:wght@300&display=swap');
    font-family: 'Alegreya Sans', sans-serif;
    font-size: 15px;
    
`;
export default function ButtonText(props) {
return <StyledButtonText>{props.text}</StyledButtonText>
}