
import {styled,createGlobalStyle}  from 'styled-components'


export const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

`

export const StyledHeader=styled.header`
    display:flex;
    justify-content:space-around ;
    align-items:center;
    max-width:100vw;
    padding:20px;
   
`
