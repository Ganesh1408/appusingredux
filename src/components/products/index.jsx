// import React from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { SectionContainer, GlobalStyles } from "./styledComponent";
// import { createSelector } from "@reduxjs/toolkit";
import {
  getProductList,
  getProductLoadingState,
  getProductErrorState,
} from "../../store/slice/productSlice";
import Header from "../Header";

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
  const ProductsList = useSelector(getProductList);
  

  const Loading = useSelector(getProductLoadingState);
  const Error = useSelector(getProductErrorState);

  return (
    <>
    <Header/>
      <GlobalStyles />
      {Loading ? (
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          Loading.....
        </h1>
      ) : Error ? (
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>{Error}</h1>
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
          {ProductsList.map(({ id, title, rating, price, image }) => {
            return (
              <ProductCard
                key={id}
                productId={id}
                title={title}
                rating={rating.rate}
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
