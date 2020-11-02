import React from 'react';
import styled from 'styled-components';

const StyledSubheading = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
`;

export default function Subheading(props) {
    return <StyledSubheading>{props.text}</StyledSubheading>
}