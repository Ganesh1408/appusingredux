
import {styled,createGlobalStyle}  from 'styled-components'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




export const GlobalStyles = createGlobalStyle`
body{
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family:"Roboto";
  

    
}

`

export const StyledHeader=styled.header`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    max-width:1700px;
    max-height:100px;
 
    margin:auto;
    
    height:70px;
    padding:10px;
    position:fixed;
    top:0;
    left:0;
    right:0;
    box-shadow:0px 0px 6px 1px ;
    opacity:0.9;
    z-index:1000;
    

    

   
`
export const UnorderList = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:16px;

    
    `

export const List = styled.li`
    list-style-type:none;
    padding:10px;
    font-size:20px;
    


`

export const OuterSpan = styled.span`
position:relative;
display:inline-block;


    

`
export const InnerItems = styled.span`
    display:inline-block;
    position:absolute;
    top:0px;
    right:45px ;
    
    font-size:12px;
    font-weight:bold;
  
    
    text-align:center; 
    width:20px;
    height:20px;
    border-radius:50%;
    text-align:center;
   
    
`
export const WishInnerItems = styled.span`
display:inline-block;
position:absolute;
top:0px;
right:0px;

     font-size:12px;
     width:20px;
    height:20px;
    border-radius:50%;
    text-align:center;
    display:inline-block;
    background-color:red;
    color:white;
    font-weight:700;
    transition:10s;
`
   



export const IconSpan = styled.span`
    


`

