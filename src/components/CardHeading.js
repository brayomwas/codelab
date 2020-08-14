import React from 'react';
import styled from 'styled-components';

const StyledCardHeading = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    font-weignt: 300;
`;
export default function CardHeading(props) {
return <StyledCardHeading>{props.text}</StyledCardHeading>
}