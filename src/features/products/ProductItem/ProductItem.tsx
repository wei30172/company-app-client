import { useState } from "react";
import { PropsFromRedux, cartConnector } from "../../../store/cart/connector";
import formatCurrency from "../../../utils/formatCurrency";
import { ProductModal } from "../../index";
import "./ProductItem.scss";

interface Props extends PropsFromRedux {
  product: IProduct;
}

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
        className="cursor-pointer"
        src={require(`../../../assets/products/${product.image}.jpg`)}
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

export default cartConnector(ProductItem);
