import type { CartResult } from "../lib/cart";

interface CartSummaryProps {
  result: CartResult;
}

export default function CartSummary({ result }: CartSummaryProps) {
  return (
    <div>
      <p>Sous-total : {result.subtotal.toFixed(2)} €</p>
      <p>Remise : -{result.discount.toFixed(2)} €</p>
      <p>TVA 20 % : {result.tva.toFixed(2)} €</p>
      <p>Total TTC : {result.totalTTC.toFixed(2)} €</p>
    </div>
  );
}
