import React from 'react';
import styled from 'styled-components';
import {Button} from '../UI/Button';
import SuperButton from '../UI/SuperButton';
import { FlexDivRow } from '../UI/styled/styled';
import Test from '../UI/Test';


const StyledDiv = styled.div`
    background-color: red;
    border: 1px solid black;
`



const Main = () => {
    return (
        <>
            <StyledDiv>
                <h1>Styles Component</h1>
            </StyledDiv>
            {/* <StyleButton colorTexto='dark'>
                Boton
            </StyleButton> */}
            <FlexDivRow>
                <Button primary >HOME</Button>
                <SuperButton primary bgColor={'blue'}>CONTACTOS</SuperButton>
            </FlexDivRow>
            <Test></Test>
        </>     
    )
}

export default Main
