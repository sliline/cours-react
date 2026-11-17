import type { CartResult } from "../../lib/cart";

interface CartSummaryProps {
  result: CartResult;
}

function CartSummary({ result }: CartSummaryProps) {
  return (
    <div>
      <p>Sous-total : {result.subtotal.toFixed(2)} €</p>
      <p>Remise : -{result.discount.toFixed(2)} €</p>
      <p>TVA (20 %) : {result.tva.toFixed(2)} €</p>
      <p>
        <strong>Total TTC : {result.totalTTC.toFixed(2)} €</strong>
      </p>
    </div>
  );
}

export default CartSummary;
