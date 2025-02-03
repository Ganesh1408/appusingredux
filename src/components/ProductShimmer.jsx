// import React from 'react'
import {  ProductContainer } from './ProductCard/styledComponent'
import { SectionContainer } from './products/styledComponent'

export default function ProductShimmer() {
    const mapped=Array.from({length:20}).map((el,i)=>{
        return <>
        <ProductContainer key={i} style={{border:"1px solid lightgray",backgroundColor:"lightgrey"}}>
            
        </ProductContainer>
        </>
    })
  return (
    
    
    <SectionContainer>
    {mapped}
    </SectionContainer>
    
  )
}
