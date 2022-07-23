import "./ProductModal.scss";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import formatCurrency from "../../utils/formatCurrency";
import {
  AddToCartRequestPayload,
  AddToCartRequest,
} from "../../store/cart/types";

type Props = {
  product: IProduct;
  addToCartRequest: (product: AddToCartRequestPayload) => AddToCartRequest;
  closeModal: () => void;
};

const ProductModal: React.FC<Props> = ({
  product,
  addToCartRequest,
  closeModal,
}) => {
  return (
    <Modal className="product-modal" open={true} onClose={closeModal}>
      <>
        <CloseIcon
          className="close-button cursor-pointer"
          onClick={closeModal}
        />
        <div className="product-details">
          <img
            src={require(`../../assets/products/${product.image}.jpg`)}
            alt={product.title}
          />
          <div className="product-details_description">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>
              Avaiable Sizes:{" "}
              {product.availableSizes.map((size) => (
                <span key={size}>{size} </span>
              ))}
            </p>
            <h3>$ {formatCurrency(product.price)}</h3>
            <button
              className="btn"
              onClick={() => {
                addToCartRequest({ cartItem: product });
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
