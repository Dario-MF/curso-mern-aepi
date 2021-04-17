import React from 'react';
import styled, { css } from 'styled-components';

export const StyleButton = styled.button`
    background-color: #56bde6;
    padding: .5em;
    color: white;
    font-size: 1em;
    border: none;
    border-radius: 15px;
    ${({primary}) => {
        if(primary){
            return css`
                color: red;
                background-color: gray;
            `
        }   
    }}
`

export const Button = ({ children, primary }) => {
    return (
        <StyleButton primary={ primary }>{ children }</StyleButton>
    )
};