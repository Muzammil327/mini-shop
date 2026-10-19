import { describe, expect, it } from "vitest";

import { addItem, removeItem, total, type CartItem } from "./cart";

const pen: CartItem = { name: "Pen", price: 10, qty: 2 };
const book: CartItem = { name: "Book", price: 50, qty: 1 };

describe("total", () => {
  it("sums price × quantity for every item", () => {
    expect(total([pen, book])).toBe(70);
  });

  it("is 0 for an empty cart", () => {
    expect(total([])).toBe(0);
  });
});

describe("addItem", () => {
  it("adds a new product to the cart", () => {
    expect(addItem([pen], book)).toEqual([pen, book]);
  });

  it("merges the same product by adding quantities", () => {
    const cart = addItem([pen, book], { name: "Pen", price: 10, qty: 1 });

    expect(cart.find((item) => item.name === "Pen")?.qty).toBe(3);
    expect(total(cart)).toBe(80);
  });

  it("does not change the original cart", () => {
    const cart = [pen];
    addItem(cart, { name: "Pen", price: 10, qty: 1 });

    expect(cart).toEqual([{ name: "Pen", price: 10, qty: 2 }]);
  });
});

describe("removeItem", () => {
  it("removes a product by name", () => {
    expect(removeItem([pen, book], "Pen")).toEqual([book]);
  });
});
