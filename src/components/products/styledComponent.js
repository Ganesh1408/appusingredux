import styled from "styled-components";

export const GlobalStyles = styled.div`
  body {
    overflow-x:hidden;
    max-width:100vw;
  }
`

export const SectionContainer = styled.section`
  max-width:100vw;
  width:100%;
  max-height:740px;
  height:100vh;
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  overflow-x:hidden !important;
  
  
  /* scroll-behavior:smooth; */
`;
export const CardsContainer= styled.div`
height:100vh;
width:100%;
max-width:100vw;
  display:flex;
  justify-content: center;
  align-items: center;
  margin:0px auto;
  
`;
export const Button = styled.button`
  padding: 10px 30px;
  border-radius: 80px;
  background: black;
  border: none;
  color: white;
  font-size: 24px;
  position: fixed;
  right: 30px;
  bottom: 50px;
  z-index: 1;
  opacity: 0.7;
`;
export const PaginationButton = styled.button`
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  margin:0px 3px;
font-weight:700;
font-size:12px;
  margin-bottom: 20px;
  /* background:transparent; */
  font-size: 12px;
  border:${({active})=>(active ? "3px solid red":"")} ;
`;
export const PageContainer = styled.div`
  margin:auto;
  cursor: pointer;
  
  
  /* margin-top:160px; */
  /* margin-top: none; */
`;
export const NavButton = styled.button`
border:none;
padding:14px;
background-color:transparent !important;
margin:auto;
`