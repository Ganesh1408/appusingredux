// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ClearOutlined from "@mui/icons-material/ClearOutlined";
import {
  Heading,
  List,
  UnorderedList,
  WishListContainer,
  Cardheading,
  Card,
  Button,
  GlobalStyles,
} from "./styledComponents";

import { removeFromWishList } from "../../store/slice/wishListSlice";
import Header from "../Header";
import { addToCart } from "../../store/slice/cartSlice";

function WishList() {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.list);
  const theme = useSelector((state) => state.theme.theme);
  console.log(wishList);

  const handleRemoveFromWishList = (productId) => {
    dispatch(removeFromWishList({ productId }));
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
        
        <GlobalStyles />
        <Heading>Your Wish List</Heading>
        <UnorderedList>
          {wishList.length === 0 ? (
            <p>Your wish list is empty</p>
          ) : (
            wishList.map((item) => (
              <List
                key={item.productId}
                style={
                  theme ? { border: dark.border } : { border: light.border }
                }
              >
                <Card>
                  <img
                    style={{ margin: "20px" }}
                    src={item.imageUrl}
                    alt={item.title}
                    width="100px"
                  />

                  <div>
                    <Cardheading>{item.title}</Cardheading>

                    <button
                      style={{
                        backgroundColor: "none",
                        border: "none",
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                      }}
                      onClick={() => handleRemoveFromWishList(item.productId)}
                    >
                      <ClearOutlined  />
                    </button>
                    <Button
                      onClick={() => {
                        dispatch(
                          addToCart({
                            productId: item.productId,
                            title: item.title,
                            imageUrl: item.imageUrl,
                            rating: item.rating,
                            price: item.price,
                            category: item.category,
                            count: item.rating.count,
                          })
                        ),
                        dispatch(removeFromWishList({productId:item.productId }))
                      }}
                    >
                      Move to cart
                    </Button>
                  </div>
                </Card>
              </List>
            ))
          )}
        </UnorderedList>
      </WishListContainer>
    </>
  );
}
export default WishList;
