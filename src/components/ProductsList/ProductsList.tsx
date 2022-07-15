import React, { useEffect } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import "./ProductsList.scss";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = ({
  products,
  isLoading,
  error,
  fetchProductsRequest,
  addToCart,
}: PropsFromRedux) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    products && (
      <div className="products-list">
        {products.map((product: IProduct) => (
          <div key={product._id}>
            <ProductItem product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    )
  );
};

export default productsConnector(ProductsList);
