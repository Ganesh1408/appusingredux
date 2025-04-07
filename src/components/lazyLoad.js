// src/components/LazyImageComponent.jsx
import React from "react";

export default function LazyImageComponent({ src, alt, ...rest }) {
  return <img src={src} alt={alt} loading="lazy" {...rest} />;
}
