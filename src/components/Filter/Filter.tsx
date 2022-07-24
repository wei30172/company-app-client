import { useState } from "react";
import {
  PropsFromRedux,
  productsConnector,
} from "../../store/product/connector";
import "./Filter.scss";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/Select";

const Filter = ({
  filteredProducts,
  filterProductsRequest,
  sortProductsRequest,
  searchProductsRequest,
}: PropsFromRedux) => {
  const [order, setOrder] = useState("");
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const target = e.target as HTMLInputElement;
    setOrder(target.value);
    sortProductsRequest({ order: target.value });
  };

  const handleFilterChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const target = e.target as HTMLInputElement;
    setOrder("");
    setFilter(target.value);
    filterProductsRequest({ filter: target.value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setOrder("");
    setFilter("");
    searchProductsRequest({ search });
  };

  return (
    <div className="filter">
      <div className="filter_result">{filteredProducts.length} Products</div>
      <div className="filter_search">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            onChange={handleInputChange}
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
          />
        </form>
      </div>
      <div className="filter_selects">
        <FormControl>
          <InputLabel id="order-select-label">Order</InputLabel>
          <NativeSelect
            labelId="order-select-label"
            id="order"
            name="order"
            value={order}
            onChange={handleSelectChange}
            autoWidth
          >
            <MenuItem value="">Default</MenuItem>
            <MenuItem value="latest">Latest</MenuItem>
            <MenuItem value="lowest">Lowest</MenuItem>
            <MenuItem value="highest">Highest</MenuItem>
          </NativeSelect>
        </FormControl>
        <FormControl>
          <InputLabel id="size-select-label">Size</InputLabel>
          <NativeSelect
            labelId="size-select-label"
            id="size"
            name="size"
            value={filter}
            onChange={handleFilterChange}
            autoWidth
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
          </NativeSelect>
        </FormControl>
      </div>
    </div>
  );
};

export default productsConnector(Filter);
