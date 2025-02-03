// import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import {
  ProductContainer,
  Image,
  Heading,
  RatingPrice,
  Button,
  ButtonsContainer,
} from "./styledComponent";
import { GlobalStyles } from "../Header/styledComponent";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToWishList, removeFromWishList } from "../../store/slice/wishListSlice";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useUpdateProductsQuery } from "../../store/apiSlice";

// import {  useSelector } from "react-redux"

export default function ProductCard({ productId, title, imageUrl, rating, price, category,count }) {
  
  // 
  const dispatch = useDispatch();

  
  
  // const  = product;
  const theme = useSelector((state) => state.theme.theme);
  const wishList = useSelector((state)=>state.wishList.list)

  const isInWishList = wishList.some((item) => item.productId === productId);

// const {  isLoading,  } = useUpdateProductsQuery();
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

  return (
    <>

    
   <ProductContainer
      tabIndex={-1}
      style={
        theme
          ? {
              color: dark.color,
              backgroundColor: dark.backgroundColor,
              transition: dark.transition,
              border: dark.border,
            }
          : {
              color: light.color,
              backgroundColor: light.backgroundColor,
              transition: light.transition,
              border: light.border,
            }
      }
    >
      <GlobalStyles />
      
      <div>
        <Image src={imageUrl} alt="product-image" />
      </div>
      <div>
        <Heading>{title}</Heading>
      </div>
      <RatingPrice>
        <p>{+rating}★|{count}</p>
        <p>${price}</p>
      </RatingPrice>
      <ButtonsContainer>
        <Button
          height="36px"
          width="140px"
          onClick={() => dispatch(addToCart({ productId, title, imageUrl, rating, price, category,count }))}
        >
          Add to Cart
        </Button>
        {isInWishList? <Button style={{ height:"36px",display:'flex',justifyContent:"center",
          width:"140px",alignItems:'center'}}
        
          onClick={() => {
            

            dispatch(removeFromWishList({ productId}));
            
          }}
        >
          Remove WL
          
          {isInWishList? (
            <FavoriteIcon sx={{ color: "red", fontSize: "20px",marginLeft:'10px' }} />
            
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{ color: "red", fontSize: "20px",marginLeft:'10px' }}
            />
          )}
        
        </Button>:
        <Button style={{ height:"36px",display:'flex',justifyContent:"center",
          width:"140px",alignItems:'center'}}
        
          onClick={() => {
            

            dispatch(addToWishList({ productId, title, imageUrl, rating, price, category}));
                       
          }}
        >
          WishList
          
          {isInWishList? (
            <FavoriteIcon sx={{ color: "red", fontSize: "20px",marginLeft:'10px' }} />
            
          ) : (
            <FavoriteBorderOutlinedIcon
              sx={{ color: "red", fontSize: "20px",marginLeft:'10px' }}
            />
          )}
        
        </Button>
        }
      </ButtonsContainer>
    </ProductContainer>
    
    </>
  );
}
