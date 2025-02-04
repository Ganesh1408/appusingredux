import {useState} from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { SectionContainer, GlobalStyles, Button, PaginationButton,PageContainer,CardsContainer, NavButton } from "./styledComponent";
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
const [currentPage,setCurrentPage]= useState(0)
  const theme = useSelector((state) => state.theme.theme);
  // const ProductsList = useSelector(getProductList);

  const { data, isError, isLoading, error } = useUpdateProductsQuery();

  // const a = useUpdateProductsQuery();
  // console.log(a);

  const page_size = 4;
  const no_of_products = data?.length || 0;
  const no_of_pages = no_of_products / page_size;
  const start = currentPage*page_size;
  const end = start + page_size;

  // console.log(dataLength)
  const handleIncrement=()=>{
    setCurrentPage((prev)=>prev+1)
  }

  const handleDecrement=()=>{
    setCurrentPage((prev)=>prev-1)
  }




  return (
    <>
      <Header />
      <GlobalStyles />

      {isLoading ? (
        <ProductShimmer />
      ) : isError ? (
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>
          {error.error || "something went wrong"}
        </h1>
      ) : (
        <>
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
          <CardsContainer >
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
          {data.slice(start,end).map(({ id, title, rating, price, image }) => {
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
         </CardsContainer>
         
         <PageContainer  style={  //pagination 
              theme
                ? {
                    backgroundColor: dark.backgroundColor,
                    color: dark.color,
                    transition:dark.transition
                  }
                : { backgroundColor: light.backgroundColor, color: light.color,transition:light.transition }
            } 
            > 
        {currentPage === 0 ? (""):( <NavButton  onClick ={handleDecrement}>⏮️</NavButton>)}
         {Array.from({ length: no_of_pages }, (_, i) => i + 1).map(
           (each) => (
           
             <PaginationButton onClick = {()=>setCurrentPage(each-1)} key={each}>{each}</PaginationButton>
            
           )
         )}
          {currentPage  === no_of_pages-1 ? (""):(<NavButton onClick ={handleIncrement}>⏭️</NavButton>)}
       </PageContainer>

        </SectionContainer>
        
       </>
      )}
    </>
  );
}

export default Products;
