export interface Product {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface CartResult {
  subtotal: number;
  discount: number;
  totalHT: number;
  tva: number;
  totalTTC: number;
}

export function calculateCart(
  products: Product[],
  discount: number = 0,
): CartResult {
  let subtotal = 0;

  for (const product of products) {
    subtotal += product.price * product.qty;
  }

  const discountAmount = (subtotal * discount) / 100;
  const totalHT = subtotal - discountAmount;
  const tva = totalHT * 0.2;
  const totalTTC = totalHT + tva;

  return {
    subtotal: subtotal,
    discount: discountAmount,
    totalHT: totalHT,
    tva: tva,
    totalTTC: totalTTC,
  };
}
