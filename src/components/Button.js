import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 200px;
    height: 40px;
    background-color: #fafafa;
    border: 1px solid #3366cc;
    color: #3366cc;
    border-radius: 10px;
`;

export default function Button(props) {
    return <StyledButton className="waves-effect">{props.text}</StyledButton>
}