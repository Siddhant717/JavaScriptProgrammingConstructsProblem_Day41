
//creating function to generate three digit random number
function GenerateThreeDigitRandomNumber() {
    return Math.floor(Math.random() * 900 + 100);
}


let array = new Array();
//storing the random number into array
for (let i = 0; i < 10; i++) {
    array.push(GenerateThreeDigitRandomNumber());
}
//printing the elements in array
console.log("Ten 3 digits Random numbers are: " + array);

//creating function to find 2nd largest and 2nd smallest elements
function FindLargestAndSmallest(arrayOfElements) {
    let firstLargest = 0,
        secondlargest = 0;
    let firstSmallest = 1000,
        secondSmallest = 1000;
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i] > firstLargest) {
            secondlargest = firstLargest;
            firstLargest = arrayOfElements[i];
        } else if (
            arrayOfElements[i] > secondlargest &&
            arrayOfElements[i] != firstLargest
        )
            secondlargest = arrayOfElements[i];
    }
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i] < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = arrayOfElements[i];
        } else if (
            arrayOfElements[i] < secondSmallest &&
            arrayOfElements[i] != firstSmallest
        )
            secondSmallest = arrayOfElements[i];
    }
    //printing the results
    console.log("First largest number is: " + firstLargest);
    console.log("Second largest number is: " + secondlargest);
    console.log("First smallest number is: " + secondSmallest);
    console.log("Second smallest number is: " + firstSmallest);

};
//calling the function
FindLargestAndSmallest(array);

console.log("\nUsing Array Sort Method");
array.sort();
console.log("Second Largest Number is : "+array[8]);
console.log("Second smallest Number is : "+array[0]);
