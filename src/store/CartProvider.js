import CartContext from './cart-context';
const addItemToCartHandler = item => {};

const removeItemToCartHandler = id => {};

const CartProvider = props => {
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
