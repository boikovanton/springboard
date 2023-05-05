// alert("It's working");
// console.log(3 + 3);
// console.error("Oh no!!!");
// let rating = prompt("What is rating number?");
// if (rating < 3) {
//     console.log("Rating less than 3.")
// } else if (rating === 3) {
//     console.log("Rating is 3.")
// } else {
//     console.log("Rating more than 3.")
// }
// function returnsAValue() {
//     return "hi!";
//   }
// 
//   returnsAValue(); // "hi!"
//   function returnsAValue() {
//     console.log("hi!");
//   }
// function order(food) {
//     return `I'll have the ${food}, please.`;
//   }
//
//   console.log(order("salad")); // "I'll have the salad, please."
//   console.log(order("pizza")); // "I'll have the pizza, please."
//   console.log(order("tacos")); // "I'll have the tacos, please."
//
// function topThreeMusicians(musicianOne, musicianTwo, musicianThree) {
//     return ` My top three favorite musicians are ${musicianOne}, ${musicianTwo}, and ${musicianThree}.`;
//   }
//   topThreeMusicians("Miley Cyrus", "Hanson");
//   // "My top three favorite musicians are Miley Cyrus, Hanson, and undefined."
//
// let count = 0;

// function counter() {
//     let myName = "Colt";
//     count++;
//     return `${myName} has called the counter function ${count} times!`
// }
//
// function isValidPassword(username, password) {
//     if (password.length > 7,
//         password.indexOf(' ') == -1,
//         password.indexOf(username) == -1
//     ) {
//         return [true, `Username ${username} and password ${password}`];
//     }
//     return [false, `Username ${username} and password ${password}`];
// }
//
// function averageArray(arrayNumbers) {
//     let arraySum = 0;
//     let averageResult = 0;
//     for (i = 0; i < arrayNumbers.length; i++) {
//         arraySum += arrayNumbers[i];
//         averageResult = arraySum/(i+1);
//     }
//     return console.log(averageResult);
// }
//
// function getCard() {
//     const cardValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
//     const cardSuit = ["clubs", "spades", "hearts", "diamonds"];
//     function random(x) {
//         const randomIndex = Math.floor(Math.random()*x.length);
//         const randomElement = x[randomIndex];
//         return randomElement;
//     }
//     randomValue = random(cardValue);
//     randomCardSuit = random(cardSuit);
//     const randomCard = {
//         value: randomValue,
//         suit: randomCardSuit
//     }
//     return console.log(randomCard);
// }
// void fizzBuzz(int n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if (i % 3 === 0) {
//             console.log("Fizz");
//         } else if (i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// let str = "Matt";
// newStr = str + str;
//
// function pluck(json, key) {
//     var obj = JSON.parse(json);
//     const arrObj = obj;
//     const result =[];
//     for (let i = 0; i < arrObj.length; i++) {
//         const temp = arrObj[i];
//         const arr = temp[key];
//         result.push(arr);
//     }
//     console.log(result);
// }
// function twoHighest(arr) {
//     let arrHighest = [];
//     let highest = null;
//     let secondHighest = null;
//     for (i = 0; i < arr.length; i++) {
//         const temp = arr[i];
//         if (temp > highest) {
//             highest = temp;
//         } else {
//             secondHighest = temp;
//         }
//     }
//     arrHighest.push(secondHighest, highest);
//     console.log(arrHighest);
// }
// const formElement = document.querySelector("form");

// formElement.addEventListener("submit", function(event){
//   event.preventDefault();
//   console.log("you just submitted the form!");
// })
// // listen for the keypress everywhere
// document.addEventListener("keypress", function(event) {
//     if (event.key === "a") {
//       alert("you just pressed the 'a' key!");
//     }
//   });

// const ul = document.querySelector("ul");
// const buttons = ul.querySelectorAll("button");

//   for (let button of buttons) {
//     button.addEventListener("click", function(event) {
//       event.target.parentElement.remove();
//     });
//   }
// const form = document.querySelector("form");
// const friendList = document.querySelector("#friend-list");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const newFriendInput = document.querySelector("#first-name");
//   const newLi = document.createElement("li");
//   const newButton = document.createElement("button");
//   newLi.innerText = newFriendInput.value;
//   newButton.innerText = "Remove";

//   friendList.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//       event.target.parentElement.remove();
//     }
//   });

//   newLi.append(newButton);
//   friendList.append(newLi);
//   form.reset();
// });
const ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
  const selectedElement = event.target;
  selectedElement.style.backgroundColor = 'red';
  selectedElement.textContent += ' Clicked!';
  console.log("see all data attributes", selectedElement.dataset);
  console.log("see one data attribute", selectedElement.getAttribute("data-model"));
});