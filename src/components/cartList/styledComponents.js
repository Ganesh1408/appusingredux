import styled from "styled-components";

export const GlobalStyles = styled.div`
  body {
  }
`;

export const WishListContainer = styled.div`
  display: flex;
  max-width: 1700px;
  max-height: 100vh;

  margin: auto;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 160px;
  position: relative;
`;
export const Heading = styled.h2`
  text-align: center;
  position: fixed;
  top: 80px;
  text-align:center;
  z-index:100;
  /* background-color:transparent; */
`;
export const CardsContainer = styled.div`
  position: relative;
overflow: auto;
  min-height: 90vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior:smooth;
  z-index:99;
  
`;


export const UnorderedList = styled.ul`
  display: flex;

  justify-content: center;
  align-items: center;
  margin: auto;

  flex-wrap: wrap;
  padding-bottom: 30px;
  
`;

export const List = styled.li`
  list-style-type: none;

  width: 350px;
  height: 200px;

  padding: 20px;

  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const IncrementContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 10px;
`;
export const Idbutton = styled.button`
  padding: 5px 20px;
  font-weight: 700;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
`;

export const Cardheading = styled.h3`
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Button = styled.button`
  background-color: cornflowerblue;
  border: 1px solid white;
  border-radius: 8px;
  height: 36px;
  width: 120px;
  font-weight: 700;
  font-size: 16px;
  &:hover {
    background-color: blue;
  }
`;

export const CartTotal = styled.div`
  width: 400px;
  min-height: 200px;
  position: fixed;
  right: 0px;
  top: 70%;
  padding: 20px;
  /* background-color:green; */
  background-color: transparent;
`;
export const TotalPrice = styled.p`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  right: 40px;
  bottom: 80px;
  padding-bottom: 40px;
`;
export const TotalQuan = styled.p`
  position: absolute;
  right: 40px;
  bottom: 58px;
  padding-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
`;

export const ProceedButton = styled.button`
  padding: 16px 30px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  font-size: 16px;
  font-weight: 700;
  border-radius:60px;
  position: absolute;
  right: 40px;
  bottom: 40px;
  &:hover{
    background-color:
  }
`;
