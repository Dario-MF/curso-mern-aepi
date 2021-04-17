import React from 'react';
import styled from 'styled-components';
import {StyleButton} from './Button';

const StyledSuperButton = styled(StyleButton)`
    font-size: 25px;
`

const SuperButton = ({ childern, primary, bgColor }) => {
    return (
        <StyledSuperButton primary={ primary } bgColor={ bgColor }>{ childern }</StyledSuperButton>
    );
};

export default SuperButton;
