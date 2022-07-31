import React, { useEffect } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../../store/product/connector";
import { ProductItem } from "../../index";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import "./ProductsList.scss";

const ProductsList = ({
  paginatedProducts,
  isLoading,
  error,
  fetchProductsRequest,
}: PropsFromRedux) => {
  useEffect(() => {
    fetchProductsRequest();
  }, [fetchProductsRequest]);

  return isLoading ? (
    <div className="page-flex">
      <HourglassEmptyIcon />
    </div>
  ) : error ? (
    <div className="page-flex">
      <ErrorOutlineIcon />
    </div>
  ) : (
    paginatedProducts && (
      <div className="products-list">
        {paginatedProducts.map((product: IProduct) => (
          <div key={product._id}>
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    )
  );
};

export default productsConnector(ProductsList);
