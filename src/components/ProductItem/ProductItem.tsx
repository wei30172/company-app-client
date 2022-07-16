import { useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import {
  AddToCartRequestPayload,
  AddToCartRequest,
} from "../../store/cart/types";
import ProductModal from "../ProductModal/ProductModal";
import "./ProductItem.scss";

type Props = {
  product: IProduct;
  addToCartRequest: (product: AddToCartRequestPayload) => AddToCartRequest;
};

const ProductItem: React.FC<Props> = ({ product, addToCartRequest }) => {
  const [showProductModal, setShowProductModal] = useState(false);

  const openModal = () => {
    setShowProductModal(true);
  };
  const closeModal = () => {
    setShowProductModal(false);
  };

  return (
    <div className="product-item">
      <img
        src={require(`../../assets/products${product.image}`)}
        alt={product.title}
        onClick={openModal}
      />
      <div>
        <h3>{product.title}</h3>
        <h3>$ {formatCurrency(product.price)}</h3>
      </div>
      <button
        className="btn"
        onClick={() => addToCartRequest({ cartItem: product })}
      >
        Add to Cart
      </button>
      {showProductModal && (
        <ProductModal
          product={product}
          addToCartRequest={addToCartRequest}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProductItem;
