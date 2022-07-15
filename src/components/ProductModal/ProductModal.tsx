import "./ProductModal.scss";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import formatCurrency from "../../utils/formatCurrency";

type Props = {
  product: IProduct;
  addToCart: (product: IProduct) => void;
  closeModal: () => void;
};

const ProductModal: React.FC<Props> = ({ product, addToCart, closeModal }) => {
  return (
    <Modal className="product-modal" open={true} onClose={closeModal}>
      <>
        <CloseIcon className="close-button" onClick={closeModal} />
        <div className="product-details">
          <img
            src={require(`../../assets/products${product.image}`)}
            alt={product.title}
          />
          <div className="product-details_description">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              Avaiable Sizes:{" "}
              {product.availableSizes.map((size) => (
                <span key={size}>{size}</span>
              ))}
            </p>
            <h3>$ {formatCurrency(product.price)}</h3>
            <button
              className="btn"
              onClick={() => {
                addToCart(product);
                closeModal();
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </>
    </Modal>
  );
};

export default ProductModal;
