//online ticket perches discount offers
// first 100 --> 100tk
// 101 --> 200 = 90tk
// 200+ = 80 tk

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 80;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const total = restTicketPrice + first100Price;
    return total;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const total = first100Price + second100Price + restTicketPrice;
    return total;
  }
}
const total = ticketPrice(201);
console.log(total);
