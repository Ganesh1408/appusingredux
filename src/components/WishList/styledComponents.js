import styled from "styled-components";

export const GlobalStyles = styled.div`
    body{
     
    }

`

export const WishListContainer = styled.div`
  display: flex;
  max-width:1700px;
  min-height:100vh;
  
  width:100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:auto;
  margin-top:90px;
  position: relative;
  
  
  
`;

export const Heading = styled.h2`
  text-align: center;
  /* position:sticky;
    top:120px; */
`;

export const UnorderedList = styled.ul`
  display: flex;
  
  justify-content:center;
  align-items:center;
  margin:auto;
  
  flex-wrap: wrap;
  padding-bottom:30px;
`;


export const List = styled.li`
  list-style-type: none;
  /* width: 100%; */
  width:300px;
  height:200px;
  /* border: 1px solid black; */
  padding: 20px;

  margin: 10px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:16px;
  
 
`;

export const Card = styled.div`

 display:flex;
flex-direction:row;
  justify-content: space-between;
  align-items: center;
  


`

export const Cardheading = styled.h3`
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  
  
`;

export const Button = styled.button`
  background-color:cornflowerblue;
  border:1px solid white;
  border-radius:8px;
  height:36px;
  width:120px;
  font-weight:700;
  font-size:16px;
  &:hover{
    background-color:blue;
  }
  /* color:red; */


`


