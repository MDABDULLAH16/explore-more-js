const allFriends = [
  "abul",
  "babul",
  "kabul",
  "kamal",
  "jamal",
  "babul",
  "jalal",
  "Rohman",
  "Rohman",
  "kamal",
  "karim",
  "rohim",
  "kamal",
  "jalal",
  "kamal",
];

function findUniqe(friend) {
  let uniqe = [];
  for (let i = 0; i < friend.length; i++) {
    const name = friend[i];
    if (uniqe.includes(name) === false) {
      uniqe.push(name);
    }
  }
  return uniqe;
}
const result = findUniqe(allFriends);
console.log(result);
