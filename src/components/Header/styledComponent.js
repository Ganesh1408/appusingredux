
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
    justify-content:space-around;
    align-items:center;
    max-width:100vw;
    padding:20px;
   
`
export const UnorderList = styled.ul`
    display:flex;
    justify-content:space-evenly;
    align-item:center;
    margin-top:auto;

    
    `

export const List = styled.li`
    list-style-type:none;
    padding:10px;
    font-size:20px;
    


`

