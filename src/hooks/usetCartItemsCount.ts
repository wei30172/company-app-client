import { useState, useEffect } from "react";

const useCount = (cartItems: IProduct[]) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartItemsCount(
        cartItems.reduce((total, item) => total + item.count, 0),
      );
    }
  }, [cartItems]);

  return [cartItemsCount];
}

export default useCount;