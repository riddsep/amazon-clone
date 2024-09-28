export const cart = [];

export function addToCart(productId) {
  let macthingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productName) {
      macthingItem = cartItem;
    }
  });

  if (macthingItem) {
    macthingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
    });
  }
}
