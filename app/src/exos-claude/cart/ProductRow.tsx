import type { Product } from "../../lib/cart";

interface ProductRowProps {
  product: Product;
  onIncrement: () => void;
  onDecrement: () => void;
}

function ProductRow({ product, onIncrement, onDecrement }: ProductRowProps) {
  const linePrice = product.price * product.qty;

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price.toFixed(2)} €</td>
      <td>
        <button onClick={() => onDecrement()} disabled={product.qty === 0}>
          -
        </button>
        <span> {product.qty} </span>
        <button onClick={() => onIncrement()}>+</button>
      </td>
      <td>{linePrice.toFixed(2)} €</td>
    </tr>
  );
}

export default ProductRow;
