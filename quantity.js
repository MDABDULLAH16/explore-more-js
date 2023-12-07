const shopes = [
  { name: "shoe", price: 3000, quantity: 2 },
  { name: "sunglass", price: 200, quantity: 7 },
  { name: "shirt", price: 2200, quantity: 4 },
  { name: "pants", price: 900, quantity: 3 },
  { name: "belt", price: 500, quantity: 2 },
];

function shoppingCard(prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    const product = prices[i];
    const totalProduct = product.price * product.quantity;
    sum = sum + totalProduct;
  }
  return sum;
}
const total = shoppingCard(shopes);
console.log(total);
