import styled from "styled-components";

export const GlobalStyles = styled.div`
  body {
  }
`;

export const SectionContainer = styled.section`
  min-width:1160px;
  max-height:800px;
  height:100vh;
  /* width:100%; */
  border: "none";
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  
  
  /* scroll-behavior:smooth; */
`;
export const CardsContainer= styled.div`
height:100%;
width:100%;
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