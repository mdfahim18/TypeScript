const cart = [
  { name: "Keyboard", price: 1000, quantity: 2, isAvailable: true },
  { name: "Mouse", price: 500, quantity: 3, isAvailable: false },
  { name: "Monitor", price: 10000, quantity: 1, isAvailable: true },
  { name: "Headphone", price: 2000, quantity: 2, isAvailable: false },
];

interface Product {
  name: string;
  price: number;
  quantity: number;
  isAvailable: boolean;
}

const availableProductTotalPrice = (products: Product[]) => {
  const allAvailable = products.filter(
    (product) => product.isAvailable && product.price * product.quantity
  );
  return allAvailable.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

console.log(availableProductTotalPrice(cart));
