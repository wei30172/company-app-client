import "./ProductItem.scss";
import { useState } from "react";
import formatCurrency from "../../utils/formatCurrency";
import ProductModal from "../ProductModal/ProductModal";
import { AddToCart } from "../../store/cart/types";

type Props = {
  product: IProduct;
  addToCart: (payload: IProduct) => AddToCart;
};

const ProductItem: React.FC<Props> = ({ product, addToCart }) => {
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
      <button className="btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
      {showProductModal && (
        <ProductModal
          product={product}
          addToCart={addToCart}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ProductItem;
