// Auth
interface AuthState {
  token: string;
  isLoading: boolean;
  error: string;
}

interface IUser {
  name: string;
  email: string;
}

interface IAuth {
  result: IUser;
  token: string;
}

// Product
interface ProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string;
  filteredProducts: IProduct[];
}

interface IProduct {
  _id: string;
  image: string;
  title: string;
  description: string;
  availableSizes: string[];
  price: number;
  count: number;
  createdAt?: string;
  updatedAt?: string;
}

// Order
interface OrdersState {
  order: IOrder;
  orders: IOrder[];
  isLoading: boolean;
  error: string;
}

interface IOrder {
  _id?: string;
  email: string;
  name: string;
  address: string;
  total: number;
  cartItems: IProduct[];
  createdAt?: string;
  updatedAt?: string;
}

// Cart
interface CartState {
  cartItems: IProduct[];
}
