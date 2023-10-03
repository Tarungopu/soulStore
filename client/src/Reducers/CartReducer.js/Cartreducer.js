export const cartreducer = (
  state = { cartitems: [], shippingdetails: [] },
  action
) => {
  switch (action.type) {
    case "CART-ADDING":
      const item = action.payload;
      const presentincart = state.cartitems.find(
        (x) => x.product === item.product
      );
      if (presentincart) {
        return {
          ...state,
          cartitems: state.cartitems.map((x) =>
            x.product === presentincart.product ? item : x
          ),
        };
      } else {
        return { ...state, cartitems: [...state.cartitems, item] };
      }
    case "CART-REMOVE":
      return {
        ...state,
        cartitems: state.cartitems.filter(
          (data) => data.product !== action.payload
        ),
      };

    case "SHIPPING_ADDRESS":
      return {
        ...state,
        shippingdetails: action.payload,
      };
    case "SHIPPING_ADDRESS_REMOVE":
      return {};

    case "PAYMENT_METHOD":
      return {
        ...state,
        paymentmethod: action.payload,
      };
    default:
      return state;
  }
};
