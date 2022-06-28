//EXERCISES FROM THE SECOND LINK: https://adriann.github.io/programming_problems.html

//Elementary
//exercise 1
//Write a program that prints ‘Hello World’ to the screen.

// alert("Hello world!");

//exercise 2
//Write a program that asks the user for their name and greets them with their name.

// function transformH1(nameFromUser) {
//   var nameFromUser = prompt("What is your name");
//   document.querySelector("h1").innerText = ` Hello ${nameFromUser}`;
// }
// transformH1();

//exercise 3
//Modify the previous program such that only the users Alice and Bob are greeted with their names.

// function transformH1(nameFromUser) {
//   var nameFromUser = prompt("What is your name");
//   if (nameFromUser === "Alice and Bob") {
//     document.querySelector("h1").innerText = ` Hello ${nameFromUser}`;
//   }
// }
// transformH1();

//exercise 4
//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// var n = prompt("chose a number");
// function calculator(n) {
//   var a = 0;
//   for (let i = 0; i <= n; i++) {
//     a = a + i;
//   }
//   return a;
// }
// document.querySelector("h3").innerText = `the sum is ${calculator(n)}`;

//exercise 5
//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17

// var n = parseInt(prompt("chose a number"));
// if (n % 3 === 0 || n % 5 === 0) {
//   function calculator(n) {
//     var a = 0;
//     for (let i = 0; i <= n; i++) {
//       a = a + i;
//     }
//     return a;
//   }
//   document.querySelector("h3").innerText = `the sum is ${calculator(n)}`;
// } else {
//   document.querySelector("h3").innerText = `Your number is not 3 or 5`;
// }

//exercise 6
//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

// var n = parseInt(prompt("chose a number"));
// var option = prompt(
//   "Please 'sum' or 'product' in order to receive the desired result"
// );
// if (option == "sum") {
//   function sumOfNumbers(n) {
//     var a = 0;
//     for (let i = 0; i <= n; i++) {
//       a = a + i;
//     }
//     return a;
//   }
//   document.querySelector("h3").innerText = `the sum is ${sumOfNumbers(n)}`;
// } else {
//   function prodOfNumbers(n) {
//     var a = 1;
//     for (let i = 1; i <= n; i++) {
//       a = a * i;
//     }
//     return a;
//   }
//   document.querySelector("h3").innerText = `the product is ${prodOfNumbers(n)}`;
// }

//exercise 7
//Write a program that prints a multiplication table for numbers up to 12.
// This one is working without issue in the console but I still cannot manage to print on the screen. Is printing on the screen only the last multiplication.

// var numberToMultiply = prompt("Chose a number no multiply!");
// function tableOfMultiply(numberToMultiply) {
//   let i = 0;
//   while (i <= 10) {
//     let a = i * numberToMultiply;
//     // document.querySelector(
//     //   "h3"
//     // ).innerText = `${i} * ${numberToMultiply} = ${a}`;
//     i++;
//     console.log(`${i} * ${numberToMultiply} = ${a}`);
//   }
// }
// tableOfMultiply(numberToMultiply);

//exercise 8
//Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number you can easily represent is fine too.)

//not the exercise, just understaned different but decided not to delete:
// var n = prompt("Chose a number");
// if (n % 2 === 0) {
//   document.querySelector("h3").innerText = `number is prime`;
// } else {
//   document.querySelector("h3").innerText = `number is not prime`;
// }

// for (let i = 0; i < 1000; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//     i++;
//   }
// }

//exercise 9
//Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At the end the number of tries needed should be printed. It counts only as one try if they input the same number multiple times consecutively.

//Wrong Version
// let numToGuess = 55;
// let attemptsCounter = [];
// let n;

// function guesTheMess() {
//   for (let i = 0; i == numToGuess; i++) {
//     n = parseInt(prompt("Guess the number"));
//     if (n > numToGuess) {
//       document.querySelector("h3").innerText = "Your number is bigger";
//     } else if (n < numToGuess) {
//       document.querySelector("h3").innerText = "Your number is smaller";
//     } else {
//       document.querySelector("h3").innerText = "You succeded!";
//     }
//   }
//   attemptsCounter.push(n);
// }
// guesTheMess(n, numToGuess);

// document.querySelector(
//   "h2"
// ).innerText = `Number of attempts: ${attemptsCounter.length}`;

//Good version

// let secretNumber = 55;
// let attemptsCounter = [];

// let condition = true;
// while (condition) {
//   let n = parseInt(prompt("Guess the number"));
//   if (attemptsCounter.includes(n)) {
//     continue;
//   } else {
//     attemptsCounter.push(n);
//   }

//   if (n === secretNumber) {
//     document.querySelector("h3").innerText = "You guessed the number";
//     condition = false;
//   } else if (n > secretNumber) {
//     alert("Your number is too big");
//   } else {
//     alert("Your number is too small");
//   }
// }
// document.querySelector(
//   "h4"
// ).innerText = `Your number of attempts is ${attemptsCounter.length}`;

//exercise 10
//Write a program that prints the next 20 leap years.

// function calculateLeapYear(year) {
//   if (year % 4 !== 0) {
//     console.log(year + " It is NOT LY");
//   } else if (year % 100 !== 0) {
//     console.log(year + " It IS LY");
//   } else if (year % 400 === 0) {
//     console.log(year + " It is NOT LY");
//   }
// }

// let year = 2022;

// for (let i = 0; i <= 20; i++) {
//   let actualYear = year + i;
//   let result = calculateLeapYear(actualYear);
// }

//exercise 11
//Write a program that computes the sum of an alternating series where each element of the series is an expression of the form ((-1)^{k+1})/(2 * k-1) for each value of k from 1 to a million, multiplied by 4. Or, in more mathematical notation
// 4\cdot \sum_{k=1}^{10^6} \frac{(-1)^{k+1}}{2k-1} = 4\cdot(1-1/3+1/5-1/7+1/9-1/11\ldots).

//NO!!!!


//Lists, Strings

//exercise 1
//Write a function that returns the largest element in a list.

// let list = [90, 12, 56, 3, 42, 135, 89, 0, 35, 101];
// function biggest() {
//   let max = list[0];
//   for (let i = 0; i <= list.length; i++) {
//     if (list[i] > max) {
//       max = list[i];
//     }
//   }
//   return max;
// }
// biggest(list);

//exercise 2
// Write function that reverses a list, preferably in place.
// let list = [90, 12, 56, 3, 42, 135, 89, 0, 35, 101];
// function reverseList(toBeReversed) {
//   document.querySelector("h3").innerText = toBeReversed.reverse();
// }
// reverseList(list);

//exercise 3
//Write a function that checks whether an element occurs in a list.

// let list = [90, 12, 56, 3, 42, 135, 89, 0, 35, 101];
// function checkElement(grupOfElements, elementToBeSearched) {
//   var element = grupOfElements.includes(elementToBeSearched);
//   document.querySelector("h2").innerText = element;
// }
// checkElement(list, 33);

//exercise 4
//Write a function that returns the elements on odd positions in a list.

// let list = [];
// function oddNumbers (a) {
//     for (let i = 0; i <= a; i ++){
//         if (i % 2 !== 0) {
//             list.push(i);
//         }
//     };
//     return list;
// }


//PRACTICE FROM THE COURSE//
// const objectsToChose = [
//   {
//     product: "milk",
//     price: "2",
//   },
//   {
//     product: "butter",
//     price: "5",
//   },
//   {
//     product: "bred",
//     price: "1.5",
//   },
//   {
//     product: "cheese",
//     price: "6",
//   },
//   {
//     product: "ice cream",
//     price: "7",
//   },
//   {
//     product: "fish",
//     price: "2",
//   }
// ];

// function createList () {
//   const ul = document.querySelector(".list-group");
//   ul.innerHTML = "";
//    objectsToChose.forEach((objectsToChose) => {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");
//     const product = document.createTextNode(objectsToChose.product);
//     li.appendChild(product);

//     const span = document.createElement("span");
//     span.classList.add("float-right");
//     const price = document.createTextNode(objectsToChose.price);
//     span.appendChild(price);

//     li.appendChild(span);

//     ul.appendChild(li);
//    });
// }

// window.addEventListener("load", createList);

//END OF PRACTICE FROM THE COURSE//NOT FINISHED YET





///////////////////// up to here was sanded on may.14th ///////////////







//EXERCISES FROM THE FIRST LINK: https://www.jshero.net/en/success.html

//21.To be used: String: charAt()
// Write a function shortcut that takes two strings and returns the initial letters of theses strings.
// Example: shortcut('Amnesty', 'International') should return 'AI'.
// function shortcut (a, b) {
//   let one = a.charAt(0);
//   let two = b.charAt(0);
//   return one + two;
//   };

//22.To be used: String: trim()
// Write a function firstChar, which returns the first character that is not a space when a string is passed.
// Example: firstChar(' Rosa Parks ') should return 'R'.
// function firstChar(text) {
//   let secondText = text.trim();
//   let firstLetter = secondText.charAt(0);
//   return firstLetter;
//   };

//23.To be used: String: indexOf()
// Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.
// Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.
// function indexOfIgnoreCase(a, b) {
//   let strA = a.toUpperCase();
//   let strB = b.toUpperCase();
//   let position = strA.indexOf(strB);
//   return position;
//   }


//24.To be used: String: indexOf() with from index
// Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.
// Example: secondIndexOf('White Rabbit', 'it') should return 10.
// function secondIndexOf(a, b) {
//   let strA = a.toLowerCase();
//   let strB = b.toLowerCase();
//   let firstPos = strA.indexOf(strB, 0)
//   let secPos = strA.indexOf(strB, (firstPos+1));
//   return secPos;
//   };


//25.To be used: String: substr()
// Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.
// Example: firstWord('see and stop') should return 'see'.
// function firstWord (a) {
//   let strA = a.toLowerCase();
//   let emptySpace = strA.indexOf(" ");
//   let firstWord = strA.substr(0, emptySpace);
//   return firstWord;
//   };


//26.To be used: String: replace()
// Write a function normalize, that replaces '-' with '/' in a date string.
// Example: normalize('20-05-2017') should return '20/05/2017'

// I,ve missed something and is not working :( 
// function normalize (a, b) {
// let strA = a.toLowerCase();
// let strB = b.toLowerCase();
// let positions = [];
// let firstPos = strA.indexOf("-", 0);
//     positions.push(firstPos);
// let secPos = strA.indexOf("-", (firstPos+1));
//     positions.push(secPos);
//     console.log(positions);
// for (let i = 0; i < positions.length; i++) {
//     console.log (strA[positions[i]]) ;
//     let result = strA.replace(strA[positions[i]], strB);
//     console.log(result);
// }
// };

//GOOD WORK!!
// function normalize (a, b) {
//   let stringToWork = a.split("-");
//   console.log(stringToWork);
//   let newStr = stringToWork.join(b);
//   console.log(newStr);
// }
//GOOD WORK!!
// function normalize(a, b) {
//   let newStr = a.split("-").join(b);
//     console.log(newStr);
// }

//30.To be used: Modulo
// Write a function onesDigit that takes a natural number and returns the ones digit of that number.
// Example: onesDigit(2674) should return 4.
// function onesDigit (a) {
//   let result = a % 10;
//   return result;
//   };


//31.Tom be used: Parenteheses
// Write a function mean that takes 2 numbers and returns their mean value.
// Example: mean(1, 2) should return 1.5.
// function mean (a, b) {
//   let result = (a + b) / 2;
//   return result;
//   };

//32.To be used: Math
// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
// function hypotenuse (a, b) {
//   let hypoLen = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//   return hypoLen;
//   };


//33.To be used: min and max
// Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.
// Example: midrange(3, 9, 1) should return (9+1)/2 = 5.
// function midrange (a, b, c) {
//   let min = Math.min(a, b , c);
//  let max = Math.max(a, b , c);
//  let mid = (min + max) / 2;
//  return mid;
//  };

//34.To be used: Math.PI
// Write a function area that calculates the area of a circle. The function is given the radius of the circle.
// Example: area(1) should return π and area(2) should return 4 * π.
// function area (r) {
//   let aria = Math.PI * Math.pow(r, 2);
//   return aria;
//   };

//35.Tom be used: Rounding
// Write a function round100 that rounds a number to the nearest hundred.
// Example: round100(1749) should return 1700 and round100(856.12) should return 900.
// function round100 (a) {
//   let result = Math.round(a/100) * 100;
//   return result;
//   };

//36.To be used: Random numbers
// Write a function dice that returns like a dice a random number between 1 and 6.
// function dice() {
//   let diceVal = Math.floor(Math.random() * 6) + 1;
//   return diceVal;
// }

//37.To be used: parseInt
// Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.
// Example: add('102+17') should return 119.
////NOOOO
// function add (a) {
//   let first = parseInt(a);
//   let one = first.length;
//   let two = a.substr(one);
//   let sum = first + two;
//   console.log(sum);
// }
/////NOOO
// function add(a) {
//   let nums = a.split("+");
//   console.log(nums);
//   for (let index = 0; index < (nums.length); index++) {
//     console.log(parseInt(nums[index]));
//     // const sum = parseInt(nums[index]) + parseInt(nums[index + 1]);
//     // console.log(sum);
//   } 
// }

////YEEESSSSS!!!!!!! my way in order to add if there are more numbers in the string
// function add(a) {
//   let nums = a.split("+");
//   console.log(nums);
//   let sum = 0;
//   for (let elem of nums) 
//     sum += parseInt(elem);
//     console.log(sum);
// }

/////I had to do it in this way to work on the platform//////
// function add(a) {
//   let firstNum = parseInt(a, 10);
//   console.log(firstNum);
//   let palceOfPlus = a.indexOf("+");
//   console.log(palceOfPlus);
//   let secNum = parseInt(a.substr(palceOfPlus));
//   console.log(secNum);
//   let sum = firstNum + secNum;
//   console.log(sum);
// }
// function add(a) {
//   let firstNum = parseInt(a, 10);
//   let palceOfPlus = a.indexOf("+");
//   let secNum = parseInt(a.substr(palceOfPlus));
//   let sum = firstNum + secNum;
//   return sum;
// }

//38. To be used: Boolean AND
//Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.
//I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.
// function nand(a, b) {
//     if (a && b) {
//     return false;}
//     else {
//     return true;}
//     }

// solution from the site:
// function nand(a, b) {
//     let and = a && b;
//     return !and;
//   }

//39. To be used: OR - NOR
//Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.
// I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.
// function nor (a, b) {
//     let result = a || b;
//     return !result;
//   };

//40. To be used: OR - XOR
//Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.
//I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.
// function xor(a, b) {
//     if ((a && b) || (!a && !b)) {
//         return false;
//     }
//     else {
//         return true;
//     }
  
// }

//41. To be used: Strict equality
//Write a function equals that checks two values for strict equality.
//Example: equals(1, 1) should return true and equals(1, 2) should return false.
// function equals (a, b) {
//     if (a === b) {
//      return true;}
//     else {
//      return false;}
//   };

//42. To be used: Three identical values
//The following task can be solved by an interaction of strict equality and a Boolean operator.
//Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal.
//Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.
// function equals (a, b, c) {
//     let result = (a === b) && (b === c);
//     return result;
//   };

//43. To be used: Even numbers
//The following task can be solved by an interaction of strict equality and the modulo operator.
//Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.
//Example: isEven(2) should return true and isEven(3) should return false.
// function isEven (a) {
//     if (a % 2 === 0) {
//      return true;}
//     else {
//      return false;}
//   };

//44. To be used: Strict inequality
//Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.
//Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.
// function unequal(a, b, c) {
//     let result = (a !== b) && (b !== c) && (a !== c);
//      return result;
//   };

//45. To be used: Compare numbers
//Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.
//Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.
// function isThreeDigit (a) {
//     let result = (100 <= a) && (a < 1000);
//      return result; 
//   };


//46. To be used: if
//Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
//Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
// function equals (a, b) {
//     if (a === b) {
//      return "EQUAL";}
//     else {
//      return "UNEQUAL";}
//   };

//47. To be used: Two returns
//Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.
//Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.
//

//made with the help of "hint" and "solution" of the exercice

// function repdigit(a) {
//     let ones = a % 10;
//     let tens = Math.floor(a / 10);
//     if (ones === tens) {
//       return 'Repdigit!';
//     }
//     return 'No Repdigit!';
//   }


//48. To be used: if...else
//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.
//Example: addWithSurcharge(5, 15) should return 23.

// function addWithSurcharge (a, b) {
//     let surcharge1 = 0;
//     if (a <= 10){
//      surcharge1 = 1;}
//     else {
//      surcharge1 = 2;}
  
//     let surcharge2 = 0;
//     if (b <= 10){
//      surcharge2 = 1;}
//     else {
//      surcharge2 = 2;}
//     let sum = (a + surcharge1) + (b + surcharge2);
//     return sum;
//   };


//49. To be used: else if
//Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.
//Example: addWithSurcharge(10, 30) should return 44.

// function addWithSurcharge (a, b) {
//     let surcharge1 = 0;
//     if (a <= 10) {
//      surcharge1 = 1;}
//     else if ((10 < a) && (a <= 20)) {
//      surcharge1 = 2;}
//     else {
//      surcharge1 = 3;}
  
//     let surcharge2 = 0;
//     if (b <= 10) {
//      surcharge2 = 1;}
//     else if ((10 < b) && (b <= 20)) {
//      surcharge2 = 2;}
//     else {
//      surcharge2 = 3;}
  
//     let sum = (a + surcharge1) + (b + surcharge2);
//     return sum;
//   };


//50. To be used: Arrays
//Write a function toArray that takes 2 values and returns these values in an array.
//Example: toArray(5, 9) should return the array [5, 9].


// function toArray (a, b) {
//     let arr = [a, b];
//      return arr;
//   };

//51. To be used: Get array elements
//Write a function getFirstElement that takes an array and returns the first element of the array.
//Example: getFirstElement([1, 2]) should return 1.


// function getFirstElement (a) {
//     let firstElement = a[0];
//      return firstElement;
//   };


//52. To be used: Set array elements
//Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.
//Example: setFirstElement([1, 2], 3) should return [3, 2].

// function setFirstElement (a, b) {
//     a[0] = b;
//      return a;
//   };


//53. To be used: Array: length
//Write a function getLastElement that takes an array and returns the last element of the array.
//Example: getLastElement([1, 2]) should return 2.

// function getLastElement (a) {
//     let lengthOfa = a.length;
//     let lastEl = a[lengthOfa - 1];
//      return lastEl;
//   };


//54. To be used: Sorting arrays
//Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.
//Example: sort([2, 3, 1]) should return [1, 2, 3].

// function sort (a) {
//     let newA = a.sort();
//      return newA;
//   };


//55. To be used: Array: shift() and push()
//Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.
//Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].


// function rotate (a) {
//     //   let firstEl = a[0];
//     //   console.log(firstEl);
//     //   let lastEl = a[a.length - 1];
//     //   console.log(lastEl);
//     //   let newArr = a.push(firstEl);
//     //   console.log(a);
//     //   let newArr1 = a.shift();
//     //   console.log(a);
//     // };

// function rotate (a) {
//     let firstEl = a[0];
//     let lastEl = a[a.length - 1];
//     let newArr = a.push(firstEl);
//     let newArr1 = a.shift();
//     return(a);
//   };

//56. To be used: Array: indexOf()
//Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
//Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

// function add(a, b) {
//   let presOfB = a.indexOf(b);
//   console.log (presOfB);
//   if (presOfB >= 0) {
//     console.log (b + " is already present into the array");
    
//   }
//   else {
//     a.push(b);
//     console.log (a);
//   }
// };


// function add(a, b) {
//     let presOfB = a.indexOf(b);
//     if (presOfB >= 0) {
//       return a;   
//     }
//     else {
//       a.push(b);
//       return a;
//     }
//   };

//57. To be used: Array: concat()
//Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.
//Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

// function concatUp (a, b) {
//     let arrA = a.length;
//     let arrB = b.length;
  
//     let bigArr = [];
  
//     if (arrA === arrB) {
//      bigArr = a.concat(b);}
//     else if (arrA > arrB) {
//      bigArr = b.concat(a);}
//     else {
//      bigArr = a.concat(b);}
//     return bigArr;
//   };

//58. To be used: Array: slice()
//Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.
//Example: halve([1, 2, 3, 4]) should return [1, 2].

// function halve (a) {
//     let arrLen = a.length;
//     let sli = Math.ceil(arrLen /2);
//     let halArr = a.slice(0, sli);
//     return halArr;
//   };


//59. To be used: Array: join()
//Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.
//Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.

// function list (a) {
//     let lenA = a.length;
//     if (lenA === 0) {
//      return "";
//     }
//     else if (lenA === 1) {
//     return a[0];
//     }
//     else {
//     let arr1 = a.slice(0, (lenA - 1));
//     let arr2 = a[lenA - 1];
//     let newArr1 = arr1.join(", ");
//     return (newArr1 + " and " + arr2);
//     }
//   };


//60. To be used: Array of arrays
//Write a function flat that flattens a two-dimensional array with 3 entries.
//Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

// let row1 = [4, 9, 2];
// let row2 = [3, 5, 7];
// let row3 = [8, 1, 6];
// let loshu = [row1, row2, row3];

// function flat (a) {
//   let theLen = a.length;
//   let newArr = [];
//   for (let i = 0; i < theLen; i++) {
//     newArr = newArr.concat(a[i]);
//   }
//   return newArr;
// };


//61. Theme is: comments
//Write a function median that takes an array of ascending numbers and returns the median of that numbers.
//Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.

// function median (a) {
//     let len = a.length;
//     let med = 0;
//     if (len % 2 === 0) {
//      med = ( a[(len / 2)] + a[((len / 2) - 1)] ) / 2;
//     }
//     else if (len === 1) {
//      med = a[0];
//     }
//     else {
//      med = a[Math.floor(len / 2)];
//     }
//     return med;
//   };


//62. To be used: unidentify
//Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.
//Example: hello('Nala') should return 'Hello Nala!'.

// function hello (a) {
//     if (a === undefined) {
//      return "Hello world!";
//     }
//     else {
//     return "Hello " + a + "!";
//     }
//   };


////////////////////SANDED TO IGOR ON 06 JUNE 2022 ////////////////////



//63. To be used: null
//Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.
//Example: cutCommt('let foo; // bar') should return 'bar'.

// function cutComment () {

// }

// I don't understand the exercise


//64. To be used: for loop
//Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.
//Example: addTo(3) should return 1+2+3 = 6.

// function addTo (a) {
//     let sum = 0;
//     for (let i = 0; i <= a; i ++) {
//      sum += i;
//     };
//      return sum;
//   };

//65. To be used: Factorial
//Write a function factorial that calculates the factorial of a positive integer.
//Example: factorial(3) should return 6.

// function factorial (a) {
//     let product = 1;
//     for (let i = 1; i <= a; i++) {
//      product *= i;
//     };
//     return product;
//   };

//66. To be used: Loops and arrays
//Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.
//Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.

// function mean(a) {
//     let sum = 0;
//     let len = a.length;
//     for (let i = 0; i < len; i++) {
//      sum += parseInt(a[i]);
//     };
//     return (sum / len);
//   };

//67. To be used: while loop
//Write a function spaces that takes a natural number n and returns a string of n spaces.
//Example: spaces(1) should return ' '.

// function spaces(a) {
//     let str = "";
//     while (str.length < a) {
//     str += " ";
//     };
//     return str;
//   };

//68. To be used: do...while loop
//Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.
//Example: lcm(4, 6) should return 12.

// ade with the help of solution. the idea of code was good, the logic was rong.
// function lcm (a, b) {
//     let a1 = parseInt(a);
//     let b1 = parseInt(b); 
//     let lcmNum = 0; 
//     do {
//     lcmNum ++;
//     }
//     while(
//     (lcmNum % a1) !== 0  || (lcmNum % b1) !== 0
//     ) 
//     return lcmNum;  
//   };

//69. To be used: greatest common divisor (gcd). 
//Write a function gcd that takes two natural numbers and calculates their gcd.
//Example: gcd(6, 15) should return 3.

// function gcd(a, b) {
//     let a1 = parseInt(a);
//     let b1 = parseInt(b); 
  
//     let gcdNum = Math.min(a1, b1);
    
//     do {
//       if (
//       a1 % gcdNum !== 0 ||
//       b1 % gcdNum !== 0) 
//       {gcdNum --;}
//     }
  
//     while(a1 % gcdNum !== 0 || b1 % gcdNum !== 0)
  
  
//     return gcdNum;
//   };



//70. To be used: break and continue
//Write a function isPrime that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.
//Example: isPrime(7) should return true and isPrime(8) should return false.

//A simple but slow method of checking the primality of a given number n, called trial division, tests whether n is a multiple of any integer between 2 and sqare root n

//A simple but slow method of checking the primality of a given number a, called trial division, tests whether a is a multiple of any integer between 2 and sqare root from a.

// function isPrime(num) { 
//     if (num <= 1) return false; 
//     if (num % 2 == 0 && num > 2) return false; 
//     const s = Math.sqrt(num); 
//     for(let i = 3; i <= s; i += 2) { 
//         if(num % i === 0) return false; 
//     }
//     return true;
//   }
//stackoverflow :)

//71. To be used: Nested loops
//Write a function sum that calculates the sum of all elements of a two-dimensional array.
//Example: sum([[1, 2], [3]]) should return 6.

// function sum (c) {
  
//     let sum = 0;
//     for (let i = 0; i < c.length; i++){
//       for (let j = 0; j < c[i].length; j++) {
//         sum = sum + c[i][j];
//       };
//     };
//     return sum;
//   };

//72. To be used: The arguments object
//Write a function max that calculates the maximum of an arbitrary number of numbers.
//Example: max(1, 2) should return 2 and max(2, 3, 1) should return 3.

// function max () {

//     let maxNum = [];
//     for (let i = 0; i < arguments.length; i++) {
//       maxNum.push(parseInt(arguments[i]));
//       console.log(maxNum);
//     }
//     let maxVal = Math.max(...maxNum);
//     return maxVal;
//   };

//73. To be used: NaN
//Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.
//Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.

//made with solution, still  not clear.

// function parseFirstInt(input) {

//     let inputToParse = input;
  
//     for (let i = 0; i < input.length; i++) {
//       let firstInt = parseInt(inputToParse);
//       if (!Number.isNaN(firstInt)) {
//         return firstInt;
//       }
//       inputToParse = inputToParse.substr(1);
//     }
  
//     return NaN;
//   }


//74. To be used: String: split()
//Write a function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.
//Example: add('7+12+100') should return 119.

// function add (a) {
//     let str = a;
//     let parts = str.split("+");
//     let len = parts.length;
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//       sum += parseInt(parts[i]);
//     };
//     return sum;
//   };

//75. To be used: Functions call functions
//Write a function sum that takes an array of numbers and returns the sum of these numbers. Write a function mean that takes an array of numbers and returns the average of these numbers. The mean function should use the sum function.

// function sum (a) {
//     let arr = a;
//     let sum = 0;
//     let len = arr.length
//     for (let i = 0; i < len; i++) {
//       sum += arr[i];
//     };
//     return sum;
//   };
  
//   function mean (b) {
//     let len = b.length;
//     let result = sum(b) / len; 
//     return result;
//   };

//76. To be used: Recursion
//Write a function reverse that reverses the order of the characters in a string. The function should be recursive.
// Example: reverse('live') should return 'evil'.

// function reverse (a) {
//     let arrA = [...a];
//     let revArrA = arrA.reverse();
//     let newStr = revArrA.join("");
//     return newStr;
//    };

//77. To be used: Roman numerals I
//Write a function arabic that converts a Roman number (up to 1000) into an Arabic.
//Example: arabic('CDLXXXIII') should return 483



/////////////////////////////////////////////////////

//EXERCISES FROM THE SECOND LINK: https://adriann.github.io/programming_problems.html

// Lists, Strings

//5. Write a function that computes the running total of a list.
// function sum(a) {
//     let numbSum = 0;
//     let len = a.length;
//     for (let i = 0; i < len; i++) { 
//         numbSum += parseInt(a[i]); 
//     };
//     return numbSum;
// }

//6. Write a function that tests whether a string is a palindrome.
// function isPalindrome (a) {
//     let len = a.length;
//     for (let i = 0; i < (len/2); i++) {
//         if (a[i] !== a[len - 1 - i]) {
//            return "Is  not palindrome!";
//         } else {
//            return "Is Palindrome!";
//         };
//     };
//  }

//7. Write three functions that compute the sum of the numbers in a list: using a for-loop, a while-loop and recursion. (Subject to availability of these constructs in your language of choice.)

// 1
// function add(a) {
//    let sum = 0;
//    for (let i = 0; i < a.length; i++) {
//       sum += a[i];
//    }
//    return sum;
// }



// 2

// function addd(a) {
//   let i = 0;
//   let sum = 0;
//   do {
//     sum += a[i];
//     i++;
//   }
//     while (i < a.length);
//     return sum;
// }


// 3

// function adddd(n, total = 0) {
//     if (n === 0) 
//         return total;
//         return adddd(n-1, total+=n);
// }

// function yovko(a, total = 0) {
//     // Exit condition
//     if (a.length < 1) {
//         return total;
//     }
//     // Logic
//     console.log("the array now is: " + a + " and total is: " + total);
//     total += a[0]
//     a == a.shift();
//     return yovko(a, total);
// }



// Write a function on_all that applies a function to every element of a list. Use it to print the first twenty perfect squares. The perfect squares can be found by multiplying each natural number with itself. The first few perfect squares are 1*1= 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect square because there is no natural number m so that m*m=12. (This question is tricky if your programming language makes it difficult to pass functions as arguments.)


// function displayPerfectSquares(a, list = []) {
//     if (a === 0) {
//         return list;
//     };
//     b = a * a;
//     list == list.push(b);
//     return displayPerfectSquares(a - 1, list);
// }


// function displayPerfectSquares(a, c = 1, list = []) {
    
//     if (c > a) {
//         return list;
//     };

//     let b = c * c;
//     list == list.push(b);
    
//     return displayPerfectSquares(a, c + 1, list);
// }





