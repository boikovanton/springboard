// his function takes in two parameters and returns the difference of the two;
//
function difference(a,b) {
    return console.log(a-b);
}
//
// his function takes in two parameters and returns the product of the two;
//
function product(a,b) {
    return console.log(a*b);
}
//
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.).
// If the number is less than 1 or greater than 7, the function should return undefined;
//
function printDay(a) {
    const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (a < 1,
        a > 7) {
        return console.log("undefine");
        }
    return console.log(dayOfWeek[a-1]);
}
//
// this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.
//
function lastElement(a) {
    return console.log(a[a.length - 1]);
}
//
// this function takes in two parameters (both numbers). If the first is greater than the second, this function returns “First is greater”.
// If the second number is greater than the first, the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
//
function numberCompare(a,b) {
    if (a > b) {
        return console.log("First is greater");
    } else if (a == b) {
        return console.log("Numbers are equal");
    }
    return console.log("Second is greater");
}
//
// this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter.
// The function returns the number of times that letter appears in the word.
// The function should be case insensitive (does not matter if the input is lowercase or uppercase).
// If the letter is not found in the word, the function should return 0.
//
function singleLetterCount(word,letterToFind) {
    let letterCounter = 0;
    for (let letter of word) {
        if (letter === letterToFind) {
            letterCounter++;
        }
    }
    if (letterCounter > 0) {
        return console.log(letterCounter);
    }
    return console.log(0);
}
//
// this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.
//
function multipleLetterCount(wordMultiple) {
    let objectCounter = {};
    for (let keys of wordMultiple) {
        objectCounter[keys] = wordMultiple.indexOf(keys) + 1;
    }
    return console.log(objectCounter);
}
//
// this function should take in at most four parameters (an array, command, location, and value).
// If the command is “remove” and the location is “end”, the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “remove” and the location is “beginning”, the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
// If the command is “add” and the location is “beginning”, the function should add the value (fourth parameter) to the beginning of the array and return the array.
// If the command is “add” and the location is “end”, the function should add the value (fourth parameter) to the end of the array and return the array.
//
function arrayMunipulation(arr,command,location,value) {
    if (command === "remove" && location === "end") {
        return console.log(arr.pop());
    }
    if (command === "remove" && location === "beginning") {
        return console.log(arr.shift());
    }
    if (command === "add" && location === "beginning") {
        arr.unshift(value);
        return console.log(arr);
    }
    if (command === "add" && location === "end") {
        arr.push(value);
        return console.log(arr);
    }
    return console.log("Wrong");
}
//
// A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
// This function should take in one parameter and returns true or false if it is a palindrome.
// As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan a canal Panama’); returns true
//
function isPalindrome(sentence) {
    if (sentence.toLowerCase().split('').reverse().join('') === sentence.toLowerCase()) {
        return console.log(true);
    };
}
//
// using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function,
// a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.
//
function RPS(){

    function determineComputer(num){
      if(num <= .33) return "rock";
      else if(num <= .66) return "paper";
      return "scissor";
    }
  
    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());
  
  
    let answers = ["rock", "paper", "scissor"];
  
    if(!userChoice || answers.indexOf(userChoice) === -1){
      return "Please select a valid option";
    }
  
    if(userChoice === computerChoice) return "Tie!";
  
    if(userChoice === "rock" && computerChoice === "paper") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "paper" && computerChoice === "scissor") {
      return "You lose, computer picked " +  computerChoice;
    }
    if(userChoice === "scissor" && computerChoice === "rock") {
      return "You lose, computer picked " +  computerChoice;
    }
  
    return "You win! Computer picked " +  computerChoice;
  }