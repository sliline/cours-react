import { useState } from "react";
import { calculateCart } from "../../lib/cart";
import type { Product } from "../../lib/cart";
import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";

const initialProducts: Product[] = [
  { id: 1, name: "Clavier", price: 49.9, qty: 1 },
  { id: 2, name: "Souris", price: 19.9, qty: 2 },
  { id: 3, name: "Écran", price: 179, qty: 0 },
];

function Cart() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [discountInput, setDiscountInput] = useState("");

  // Remise calculée à partir de la saisie : vide ou hors de 0 à 100 → 0
  const parsedDiscount = Number(discountInput);
  const discount =
    discountInput.trim() === "" ||
    Number.isNaN(parsedDiscount) ||
    parsedDiscount < 0 ||
    parsedDiscount > 100
      ? 0
      : parsedDiscount;

  const result = calculateCart(products, discount);

  function changeQty(id: number, delta: number) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, qty: Math.max(0, product.qty + delta) }
          : product,
      ),
    );
  }

  return (
    <div>
      <h2>Panier</h2>
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix unitaire</th>
            <th>Quantité</th>
            <th>Prix de la ligne</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onIncrement={() => changeQty(product.id, 1)}
              onDecrement={() => changeQty(product.id, -1)}
            />
          ))}
        </tbody>
      </table>

      <label>
        Remise (%) :{" "}
        <input
          type="number"
          value={discountInput}
          onChange={(e) => setDiscountInput(e.target.value)}
        />
      </label>

      <CartSummary result={result} />
    </div>
  );
}

export default Cart;
