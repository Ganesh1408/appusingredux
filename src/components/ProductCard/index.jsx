// import React from 'react'

import { useDispatch} from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import { ProductContainer } from "./styledComponent";

// import {  useSelector } from "react-redux"

export default function ProductCard(props) {
  const dispatch = useDispatch();
  
  // eslint-disable-next-line react/prop-types
  const { product } = props;
  const { id, title, image, rating, price, category } = product;

  return (
    <ProductContainer>
      <div>
        <img src={image} alt="product-image" />
      </div>
      <div>
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div>
        <p>{+rating.rate}★ ★ ★ ★</p>
        <p>{price}</p>
      </div>
      <button onClick={() => dispatch(addToCart({...product}))}>Add to Cart</button>
    </ProductContainer>
  );
}
