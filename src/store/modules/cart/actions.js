export function addToCartRequest(id) {
  return {
    type: 'ADD_TO_CART_RESQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: 'ADD_TO_CART_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: 'UPDATE_AMOUNT_CART_REQUEST',
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: 'UPDATE_AMOUNT_CART_SUCCESS',
    id,
    amount,
  };
}
