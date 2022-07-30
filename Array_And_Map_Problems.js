//Calculating Prime Factors
function PrimeFactors(number) {
    let array = new Array();
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        let count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) count++;
        }
        if (count == 0 && i > 1) array.push(i);
      }
    }
    return array;
  }
  let number = Math.floor(Math.random() * 1000);
  console.log("Prime Factors of " + number + " are : ");
  console.log(PrimeFactors(number));