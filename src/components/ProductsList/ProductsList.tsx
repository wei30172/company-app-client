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
  filteredProducts,
  isLoading,
  error,
  fetchProductsRequest,
  addToCartRequest,
}: PropsFromRedux) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  return isLoading ? (
    <div className="page_state">
      <HourglassEmptyIcon />
    </div>
  ) : error ? (
    <div className="page_state">
      <ErrorOutlineIcon />
    </div>
  ) : (
    filteredProducts && (
      <div className="products-list">
        {filteredProducts.map((product: IProduct) => (
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
