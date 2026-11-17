import { useState } from "react";
import { calculateCart, type Product } from "../lib/cart";
import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";

const initialProducts: Product[] = [
  { id: 1, name: "Clavier", price: 49.9, qty: 1 },
  { id: 2, name: "Souris", price: 19.9, qty: 2 },
  { id: 3, name: "Écran", price: 179, qty: 0 },
];

export default function Cart() {
  const [products, setProducts] = useState(initialProducts);
  const [discountText, setDiscountText] = useState("");

  const discountValue = Number(discountText);
  const discount =
    discountText === "" || discountValue < 0 || discountValue > 100
      ? 0
      : discountValue;
  const result = calculateCart(products, discount);

  function changeQty(id: number, delta: number) {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, qty: product.qty + delta } : product,
      ),
    );
  }

  return (
    <div>
      <h1>Panier</h1>
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onIncrement={() => changeQty(product.id, 1)}
          onDecrement={() => changeQty(product.id, -1)}
        />
      ))}
      <label>
        Remise (%) :{" "}
        <input
          value={discountText}
          onChange={(e) => setDiscountText(e.target.value)}
        />
      </label>
      <CartSummary result={result} />
    </div>
  );
}
