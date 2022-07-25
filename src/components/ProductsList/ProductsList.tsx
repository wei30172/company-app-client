import React, { useEffect } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import { ProductItem } from "../index";
import "./ProductsList.scss";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

const ProductsList = ({
  paginatedProducts,
  isLoading,
  error,
  fetchProductsRequest,
  addToCartRequest,
}: PropsFromRedux) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  return isLoading ? (
    <div className="page_flex">
      <HourglassEmptyIcon />
    </div>
  ) : error ? (
    <div className="page_flex">
      <ErrorOutlineIcon />
    </div>
  ) : (
    paginatedProducts && (
      <div className="products-list">
        {paginatedProducts.map((product: IProduct) => (
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
