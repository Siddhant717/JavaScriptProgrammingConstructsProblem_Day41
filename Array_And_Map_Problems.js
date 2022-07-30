//
function Repeated(number) {
    if (number % 11 == 0) {
        return true;
    }
    else return false;
}
  //creating array
let array = new Array();
for (let i = 1; i < 100; i++) {
    if (Repeated(i)) array.push(i);
}
//printing the results
  console.log(array);