// Practice Tasks

// Task-1: Write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.
// function foo() {
//     console.log("foo");
//     bar();
// }
// foo();

// function bar() {
//     console.log("bar");
// }
// bar();


// Task-2: Write function called make_avg() which will take an three integers and return the average of those value.
// function make_avg(int1, int2, int3) {
//     const total = int1 + int2 + int3;
//     const average = total / 3;
//     return average;
// }
// const makeAverage = make_avg(60, 60, 60);
// console.log(makeAverage);

// Task-3: Write a function called make_avg which will take an array of integers and the size of that array and return the average of that value.
// const array = [51, 52, 53, 54, 55, 56, 57];
// function make_avg(nums) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         sum += element;
//     }
//     const average = sum / array.length;
//     return average;
// }
// var averageFinder = make_avg(array);
// console.log(averageFinder);

// Task-4: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. Condition: "Has return + Has parameter" and "No return + Has parameter"
// function odd_even(number) {
//     if (number % 2 === 0){
//         return "Even number";
//     }
//     return "Odd number";
// }
// var isEvenOrOdd = odd_even(37);
// console.log(isEvenOrOdd);

// Without return
// function odd_even(number) {
//     if (number % 2 == 0){
//         console.log("Even number");
//     }
//     else if (number % 2 == 1){
//         console.log("Odd number")
//     }
// }
// odd_even(36);

// Task-5: Write a JS switch on traffic lights signal direction
// const signal = 'green';
// switch (signal){
//     case 'red':
//         console.log('Danger');
//         break;
//     case 'yellow':
//         console.log('Stop');
//         break;
//     case 'green':
//         console.log('Go');
//         break;
//     default:
//         console.log('N/A');
// }
