import React, { useEffect } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.scss";

const ProductsList = ({
  products,
  isLoading,
  error,
  fetchProductsRequest,
  addToCartRequest,
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
            <ProductItem
              product={product}
              addToCartRequest={addToCartRequest}
            />
          </div>
        ))}
      </div>
    )
  );
};

export default productsConnector(ProductsList);
