import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsDetailsQuery } from "../../slices/productsApiSlice";

const Product = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductsDetailsQuery(productId);
  return <>{product?.name}</>;
};

export default Product;
