const phones = [
  { name: "samsung", model: "a3", price: 40000, camara: 20 },
  { name: "walton", model: "a3", price: 40000, camara: 20 },
  { name: "oppo", model: "a3", price: 40000, camara: 20 },
  { name: "vivo", model: "a3", price: 30000, camara: 20 },
  { name: "infinix", model: "a3", price: 40000, camara: 20 },
  { name: "itel", model: "a3", price: 40000, camara: 20 },
];

function findChepest(phones) {
  let chepest = phones[0];
  for (i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < chepest.price) {
      chepest = phone;
    }
  }
  return chepest;
}

const chepestPhone = findChepest(phones);
console.log(chepestPhone);
