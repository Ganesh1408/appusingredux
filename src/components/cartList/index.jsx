import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import {
  Heading,
  List,
  UnorderedList,
  WishListContainer,
  Cardheading,
  Card,
  Button,
  GlobalStyles,
  IncrementContainer,
  Idbutton,
  ProductPrice,
  TotalPrice,
  ProceedButton,
  CardsContainer,
  CartTotal,
  TotalQuan,
} from "./styledComponents";

import Header from "../Header";
import {
  removeFromCartList,
  incrementQuantity,
  decrementQuantity,
} from "../../store/slice/cartSlice";

function CartList() {
  const dispatch = useDispatch();

  

  const CartList = useSelector((state) => state.cartItems.list);
  console.log(CartList);

  const theme = useSelector((state) => state.theme.theme);

  const handleRemoveFromCartList = (productId) => {
    dispatch(removeFromCartList({ productId }));
  };

  const dark = {
    color: "white",
    backgroundColor: "black",
    border: "1px solid white",
    transition: "0.35s ease-in-out",
  };

  const light = {
    color: "black",
    backgroundColor: "white",
    border: "1px solid black",
    transition: "0.35s ease-in-out",
  };

  const notify = (imageUrl) =>
    
    toast(
      <div  style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",margin:"10px auto",color:"black" }}>
        <img src={imageUrl} alt="product-image" style={{width:"60px",height:'70px',objectFit:"contain" }} />
      
      Product removed from cart
      </div> ,
       {
      
        containerId:"custom-toast",
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton:false,
      
      // transition: Bounce,
    });

  return (
    <>
      <Header />
      
      <GlobalStyles />
      <WishListContainer
        style={
          theme
            ? {
                color: dark.color,
                backgroundColor: dark.backgroundColor,
                transition: dark.transition,
                // border:dark.border
              }
            : {
                color: light.color,
                backgroundColor: light.backgroundColor,
                transition: light.transition,
                // border:light.border
              }
        }
      >
      
        
        <ToastContainer
          containerId="custom-toast"
          style={{marginTop:"140px",width:"200px",height:'90px',color:"black"}}
          // transition={Bounce}
        />
          <Heading>Your Cart List</Heading>
        <CardsContainer>
        
        <UnorderedList>
          {CartList.length === 0 ? (
            <List>Your Cart list is empty</List>
          ) : (
            CartList.map((item) => (
              <List
                key={item.productId}
                style={
                  theme ? { border: dark.border } : { border: light.border }
                }
              >
                <Card>
                  <img
                    style={{ marginRight: "20px" }}
                    src={item.imageUrl}
                    alt={item.title}
                    width="100"
                  />

                  <div>
                    <Cardheading>{item.title}</Cardheading>
                    <ProductPrice>Price: {item.price}</ProductPrice>
                    <IncrementContainer>
                      <Idbutton
                        onClick={() =>
                          dispatch(
                            decrementQuantity({ productId: item.productId })
                          )
                        }
                      >
                        -
                      </Idbutton>
                      <span style={{ padding: "5px" }}>{item.quantity}</span>
                      <Idbutton
                        onClick={() =>
                          dispatch(
                            incrementQuantity({ productId: item.productId })
                          )
                        }
                      >
                        +
                      </Idbutton>
                    </IncrementContainer>

                    <Button
                      style={
                        theme ? { color: dark.color } : { color: light.color }
                      }
                      onClick={() => {
                        handleRemoveFromCartList(item.productId);
                        notify(item.imageUrl);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </Card>
              </List>
            ))
          )}
        </UnorderedList>
        {CartList.length>0 && 
        <CartTotal>
      {/* <hr style={ theme ? { color: light.color,width:"60%" } : { color: dark.color,width:"60%", }} /> */}
        
        <TotalPrice>Total : $   {CartList.reduce((acc,curr)=>acc+(curr.price*curr.quantity),0).toFixed(2)}</TotalPrice>
        <TotalQuan>Quantity: {CartList.reduce((acc,curr)=>acc+curr.quantity,0)}</TotalQuan>
        <ProceedButton>Proceed to Payment</ProceedButton>
        </CartTotal>
        }
        </CardsContainer>
        
      </WishListContainer>
      </>
  );
}
export default CartList;
