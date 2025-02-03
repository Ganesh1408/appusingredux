// import React from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { SectionContainer, GlobalStyles, Button } from "./styledComponent";
// import { createSelector } from "@reduxjs/toolkit";
// import {
//   getProductList,
//   getProductLoadingState,
//   getProductErrorState,
// } from "../../store/slice/productSlice";
import Header from "../Header";
import { useUpdateProductsQuery } from "../../store/apiSlice";
import ProductShimmer from "../ProductShimmer";


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

function Products() {
  const theme = useSelector((state) => state.theme.theme);
  // const ProductsList = useSelector(getProductList);

  const { data, isError, isLoading, error } = useUpdateProductsQuery();
  // console.log(isError.error)
  const a = useUpdateProductsQuery();
  console.log(a);

  // const Loading = useSelector(getProductLoadingState);
  // const Error = useSelector(getProductErrorState);
  // console.log(data.from({length:5},(_,i)=>(i+1)))

  return (
    <>
      <Header />
      <GlobalStyles />

      {isLoading ? (
        <ProductShimmer/>
      ) : isError ? (
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          {error.error || "something went wrong"}
        </h1>
      ) : (
        <SectionContainer
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
                }
          }
        >
          
            <Button
              style={
                theme
                  ? {
                      backgroundColor: light.backgroundColor,
                      color: light.color,
                    }
                  : { backgroundColor: dark.backgroundColor, color: dark.color }
              }
            >
              help ?
            </Button>
            {data.map(({ id, title, rating, price, image }) => {
              return (
                <ProductCard
                  key={id}
                  productId={id}
                  title={title}
                  rating={rating.rate}
                  count={rating.count}
                  price={price}
                  imageUrl={image}
                />
              );
            })}
          
        </SectionContainer>
      )}
    </>
  );
}

export default Products;
