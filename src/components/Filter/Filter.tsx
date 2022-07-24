import { useState } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import "./Filter.scss";

const Filter = ({
  filteredProducts,
  isLoading,
  error,
  filterProductsRequest,
  sortProductsRequest,
}: PropsFromRedux) => {
  const [order, setOrder] = useState("default");
  const [filter, setFilter] = useState("defualt");

  return (
    <div className="filter">
      <div className="filter_result">{filteredProducts.length} Products</div>
      <div className="filter_selects">
        <div className="filter_sort">
          Order{" "}
          <select
            className="cursor-pointer"
            name="sort"
            id="sort"
            value={order}
            onChange={(e) => {
              sortProductsRequest({ order: e.target.value });
              setOrder(e.target.value);
            }}
          >
            <option value="default">----</option>
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter_size">
          Size{" "}
          <select
            className="cursor-pointer"
            name="size"
            id="size"
            value={filter}
            onChange={(e) => {
              filterProductsRequest({ filter: e.target.value });
              setOrder("defualt");
              setFilter(e.target.value);
            }}
          >
            <option value="defualt">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default productsConnector(Filter);
