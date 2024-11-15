import { createContext, ReactNode, useContext, useReducer } from "react";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

// interface CartState {
//   cartItems: CartItem[];
// }
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  addQuantity: (product: Product) => void;
  minusQuantity: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: number }
  | { type: "ADD_QUANTITY"; payload: Product }
  | { type: "MINUS_QUANTITY"; payload: Product }
  | { type: "CLEAR_CART" };

const CartContext = createContext<CartContextType | undefined>(undefined);

export const UseCart = () => useContext(CartContext);

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItems = state.find((item) => item.id === action.payload.id);
      if (existingItems) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "ADD_QUANTITY":
      const addItems = state.find((item) => item.id === action.payload.id);
      if (addItems) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "MINUS_QUANTITY":
      const minusItems = state.find((item) => item.id === action.payload.id);
      if (minusItems) {
        return state.map((item) =>
          item.quantity > 1 && item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (productID: number) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productID });
  };
  const addQuantity = (product: Product) => {
    dispatch({ type: "ADD_QUANTITY", payload: product });
  };
  const minusQuantity = (product: Product) => {
    dispatch({ type: "MINUS_QUANTITY", payload: product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        addQuantity,
        minusQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
