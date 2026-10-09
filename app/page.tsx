import { addItem, total, type CartItem } from "@/lib/cart";

export default function Home() {
  let cart: CartItem[] = [];
  cart = addItem(cart, { name: "Pen", price: 10, qty: 2 });
  cart = addItem(cart, { name: "Book", price: 50, qty: 1 });

  return (
    <main className="mx-auto flex w-full max-w-md flex-col gap-6 p-8">
      <h1 className="text-3xl font-semibold">Mini Shop</h1>
      <ul className="flex flex-col gap-2">
        {cart.map((item) => (
          <li key={item.name} className="flex justify-between">
            <span>
              {item.name} × {item.qty}
            </span>
            <span>${item.price * item.qty}</span>
          </li>
        ))}
      </ul>
      <p className="flex justify-between border-t pt-4 text-xl font-semibold">
        <span>Total</span>
        <span>${total(cart)}</span>
      </p>
    </main>
  );
}
