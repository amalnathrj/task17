// 1) Write  a program to check whether a number is plaindrome or not?

// let number = 2552;

// let orginalNumber = number;

// let reversedNumber = 0;

// while (number > 0){
//     let lastDigit = number % 10; //to get the last digit from the number
//     reversedNumber = reversedNumber * 10 + lastDigit; // to build the reversed number 
//     number = (number - lastDigit) / 10;
// }
//  if (orginalNumber === reversedNumber){
//     console.log("The Number is Palindrome");
    
//  }
//  else{
//     console.log("The number is not Palindrome");
    
//  }

// 2) Write a program to  find numbers which are multiples of  both 5 and 25 between 1000 and 1500
 
// for (let number = 1000; number <= 1500; number ++){
//     if(number % 5 === 0 && number % 25 === 0){
//         console.log(number);
        
//     }
// }

// 3) Find the sum of even numbers within a range.

// let start = 4;
// let end = 40;
// let sum =0;  //Initializes the sum variable to 0.
// for (let i = start; i <= end; i++){
//     if (i % 2 === 0){   //condition checks if i is an even number.
//         sum += i; 
       
        
//     }
// }
// console.log(`Sum of even numbers : ${sum}`);

// 4) Find the Factorial of a Number

// let  number = 8;
// let result = 1;

// for(i = 1; i <= number; i++){
//     result *= i;
// }
// console.log(`Factorial of ${number} = ${result}`);

// 5) Write a program which prints the multiples of 3 in between 0-100

// for (let number = 1; number <= 100; number ++){
//     if(number % 3 === 0){
//         console.log(number);
        
//     }
// }

// 6) Calculate the sum of numbers from 1 to 10 using a loop.

// let start = 1;
// let end = 100;
// let sum = 0;
// for ( let i = start;i <= end; i++){
//     sum += i;
// }
// console.log(`The total sum of numbers from ${start} to ${end} is ${sum}`);

// 7) Write a program to print first 10 fibnocci numbers

// let num1 = 0;
// let num2 = 1;

// for(let i = 1; i <= 10; i++){
//     console.log(num1);
//     let nextNumber = num1 + num2;  
//     num1 = num2;
//     num2 = nextNumber;
    
    
// }


// 8) Write a JavaScript program that prints all the even numbers from 1 to 100 using looping statement

// for (let i = 1; i <= 100; i++){
//     if(i % 2 === 0)
//         console.log(i);
        
// }

// 9) Print prime numbers between 1 and 100

// for (let num = 2; num <= 100; num++){
//     let isPrime = true;

//     for (i = 2 ; i < num; i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }

//     }
//     if (isPrime){
//         console.log(num);
        
//     }
// }

// 10) Print Odd Numbers between 1 and 50

// for (let i = 1; i <= 50; i++){
//     if(i % 2 === 0){    // also can change here !=
//         console.log(i - 1);
        
//     }
// }

// 11) Find the sum of even numbers from 200 to 500.

// let start = 200;

// let end = 500;

// let sum = 0;

// for (let i = start; i <= end; i++){
//     if(i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(`The total sum of even numbers from ${start} to ${end} is ${sum}`);

// 12) create an object in JavaScript using two arrays, where the first array contains 5 keys (e.g., 'name', 'age', etc.) and the second array contains 5 corresponding values (e.g., 'Sahad', '24', etc.), by iterating through the arrays with a for loop

// let keys = ['Name', 'Age', 'Number', 'MailID'];
// let values = ['Sahad', '24', '9988755665', 'sahad@luminar.in'];

// let obj = {};
// for (let i = 0; i < keys.length; i++){
//     obj[keys[i]] = values[i]
// }
// console.log(obj);

// 13) Create a resume for yourself using a JavaScript program

// const user = { Name:"AmalNath RJ", Phone: "77755443322", Mail:"amalnathrj@luminar.com",Adress: "123 House Trivandrum", Gender: "Male", Nationality:"Indian",MaritalStatus: "Unmarried" , Graduation: "BCA", Postgraduation: "MCA(pursuing)", Mearnstackdeveloperintern : "Luminar Technolab",NetworkEngineer: "KFON"}
// for(key in user ){
//     console.log(`${key} : ${user[key]}`);
    
// }


// 14) Display multiplication table of 8 using JS. ( 8*1=8 to 8*10=80)

// const num = 8;

// for( let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num * i}`);
    
// }

// 15) Write a program to find the largest element in a nested array

// const nestedArray = [
//     [8, 5, 9],
//     [2, 3, 17],
//     [7, 12, 19]
// ];

// let largest = nestedArray[0][0];

// for (let i = 0; i < nestedArray.length; i++) {
//     for (let j = 0; j < nestedArray[i].length; j++) {
//         if (nestedArray[i][j] > largest) {
//             largest = nestedArray[i][j];
//         }
//     }
// }

// console.log(`Largest element in the nested array is: ${largest}`);



