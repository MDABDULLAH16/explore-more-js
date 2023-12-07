const shopes = [
  { name: "shoe", price: 3000 },
  { name: "sunglass", price: 200 },
  { name: "shirt", price: 2200 },
  { name: "pants", price: 900 },
  { name: "belt", price: 500 },
];

function shoppingCard(prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    const element = prices[i];

    sum = sum + element.price;
  }
  return sum;
}
const total = shoppingCard(shopes);
console.log(total);
