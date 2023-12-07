const number = [25, 85, 47, 35, 9, 1, 44, 55, 22, 88, 44, 66, 7, 555];
// Arry theke kichu part akebare kete niye new array make kora
// splice diye kete sathe sathe inject o kora jay  x,y er pore value diye
const array_splice = number.splice(2, 7, 100, 500);
console.log(array_splice);
console.log(number);
