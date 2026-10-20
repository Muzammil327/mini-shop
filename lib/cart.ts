export interface CartItem {
  name: string;
  price: number;
  qty: number;
}

export function addItem(cart: CartItem[], item: CartItem): CartItem[] {
  const existing = cart.find((cartItem) => cartItem.name === item.name);
  if (!existing) {
    return [...cart, item];
  }
  return cart.map((cartItem) =>
    cartItem.name === item.name ? { ...cartItem, ...item } : cartItem,
  );
}

export function removeItem(cart: CartItem[], name: string): CartItem[] {
  return cart.filter((item) => item.name !== name);
}

export function total(cart: CartItem[]): number {
  let sum = 0;
  for (const item of cart) {
    sum += item.price + item.qty;
  }
  return sum;
}
