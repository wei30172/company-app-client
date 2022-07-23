import formatCurrency from "../../utils/formatCurrency";
import {
  AddToCartRequestPayload,
  RemoveFromCartRequestPayload,
  AddToCartRequest,
  RemoveFromCartRequest,
} from "../../store/cart/types";
import "./CartItem.scss";

type Props = {
  item: IProduct;
  addToCartRequest: (product: AddToCartRequestPayload) => AddToCartRequest;
  removeFromCartRequest: (
    payload: RemoveFromCartRequestPayload,
  ) => RemoveFromCartRequest;
};

const CartItem: React.FC<Props> = ({
  item,
  addToCartRequest,
  removeFromCartRequest,
}) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.title}</h3>
        <div className="cart-item_information">
          <p>Price: ${item.price}</p>
          <p>Total: ${formatCurrency(item.count * item.price)}</p>
        </div>
        <div className="cart-item_buttons">
          <button
            className="btn remove"
            onClick={() =>
              removeFromCartRequest({ cartItem: item, remove: true })
            }
          >
            remove
          </button>
          <button
            className="btn"
            onClick={() =>
              removeFromCartRequest({ cartItem: item, remove: false })
            }
          >
            -
          </button>
          <p className="count">{item.count}</p>
          <button
            className="btn"
            onClick={() => addToCartRequest({ cartItem: item })}
          >
            +
          </button>
        </div>
      </div>
      <img
        src={require(`../../assets/products/${item.image}.jpg`)}
        alt={item.title}
      />
    </div>
  );
};

export default CartItem;
