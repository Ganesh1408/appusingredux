
import styled from 'styled-components'


export const ProductContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:400px;
    width:300px;
    margin:auto;
    align-items:center;
    margin: 16px 16px;
    border-radius:10px;
    position:relative;
    top:140px;
    padding:10px;
    
    

`

export const Imagecontainer = styled.div`
    /* margin-top:20px; */
    
`

export const Image = styled.img`
    height:200px;
    width:100%;
    /* margin-bottom:10px; */

`
export const Heading = styled.h3`
    font-size:20px;
    text-align:center;
    font-weight:500;
    white-space:nowrap;
    max-width:300px;
    overflow:hidden;
    text-overflow:ellipsis;


`
export const RatingPrice =styled.div`
width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;

    
    

`
export const Button = styled.button`
    height:${(props) => props.height};
    width:${(props) => props.width};
    background-color:cornflowerblue;
    color:white;
    border-radius:10px;
    border:none;
    margin-top:5px;
    margin-right:10px;
    
    

    &:hover{
        background-color:blue;
    
    }

`


export const ButtonsContainer=styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
