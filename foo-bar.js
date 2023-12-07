// 1-50 porjnto dekhate hobe
// jei number 3diye vag jay tar poriborte foo dekhate hobe
// jei number 5diye vag jay tar poriborte bar dekhae hobe
// jei number 3&5 diye vag jay tar porriborte foobar dekhate hobe
// let's cheek out BRoh!

for (i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foo-bar");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else {
    console.log(i);
  }
}
