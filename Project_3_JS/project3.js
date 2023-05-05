const people = ["Greg", "Mary", "Devon", "James"];
//
//Write the command to remove “Greg” from the array.
//people.shift();
//
//Write the command to remove “James” from the array.
//people.pop();
//
//Write the command to add “Matt” to the front of the array.
//people.unshift("Matt");
//
//Write the command to add your name to the end of the array.
//people.push("Anton");
//
//Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
//Everytime we must start with const people = ["Greg", "Mary", "Devon", "James"];
//const peopleNext = people.slice(0, 1).concat(people.slice(2));
//console.log(peopleNext);
//
//Write the command that gives the indexOf where “Mary” is located.
//console.log(people.indexOf("Mary"));
//
//Write the command that gives the indexOf where “Foo” is located (this should return -1).
//console.log(people.indexOf("Foo"));
//
//Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”.
//Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
//people.splice(2,1,"Elizabeth","Artie");
//
//Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.
//const withBob = people.concat("Bob");
//console.log(`Array with Bob = [${withBob}]`);
console.log(`Array people = [${people}]`);