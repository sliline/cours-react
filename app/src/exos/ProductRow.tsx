import type { Product } from "../lib/cart";

interface ProductRowProps {
  product: Product;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function ProductRow({
  product,
  onIncrement,
  onDecrement,
}: ProductRowProps) {
  const lineTotal = product.price * product.qty;

  return (
    <div>
      <span>{product.name}</span>
      <span> {product.price.toFixed(2)} € </span>
      <button onClick={onDecrement} disabled={product.qty === 0}>
        -
      </button>
      <span> {product.qty} </span>
      <button onClick={onIncrement}>+</button>
      <span> = {lineTotal.toFixed(2)} €</span>
    </div>
  );
}
