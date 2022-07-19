import React, { useEffect } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.scss";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

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
    <HourglassEmptyIcon />
  ) : error ? (
    <ErrorOutlineIcon />
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
