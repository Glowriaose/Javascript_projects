// function factorialCal() {
//   let factorial = 1;
//   for (let n = 1; n <= 6; n++);
//   {
//     console.log(n);
//     factorial = factorial * n;
//   }
//   result = factorialCal();
//   return result;
// }
function guessingGame(guess) {
  let randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  if (guess < randomNum) {
    console.log(`the number ${guess} is too low.`);
  }
  if (guess > randomNum) {
    console.log(`the number ${guess} is too high.`);
  } else if (guess === randomNum) {
    console.log(`😊 the number guessed,${guess} is correct`);
  } else {
    return '😒 error!!!';
  }
}
guessingGame(88);
