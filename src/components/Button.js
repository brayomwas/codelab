import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    max-width: 160px;
    height: 40px;
    background-color: transparent;
    border: none;
    outline: 1px solid red;
`;

export default function Button(props) {
return <StyledButton>{props.text}</StyledButton>
}