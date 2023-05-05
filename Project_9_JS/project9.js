const body = document.body;

// Select the section with an id of container without using querySelector.
const container = document.getElementById("container");

// Select the section with an id of container using querySelector.
const containerQuery = document.querySelector("section");

// Select all of the list items with a class of “second”.
const second = document.querySelectorAll("li.second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector("ol li.third");

// Give the section with an id of container the text “Hello!”.
const textSection = document.getElementById("container");
const newP = document.createElement("p");
newP. textContent = "Hello!";
textSection.insertBefore(newP, textSection.firstChild);

// Add the class main to the div with a class of footer.
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

// Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main");

// Create a new li element.
const ul = document.createElement("ul");
container.appendChild(ul);
const liOne = document.createElement("li");
const liTwo = document.createElement("li");
const liThree = document.createElement("li");
liOne.textContent = "New li one";
liTwo.textContent = "New li two";
liThree.textContent = "New li three";
ul.appendChild(liOne);
ul.appendChild(liTwo);
ul.appendChild(liThree);

// Give the li the text “four”.
const liFour = document.createElement("li");
liFour.textContent = "four";
ul.appendChild(liFour);

// Append the li to the ul element.
// Done before.

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
const ol = container.querySelector("ol");
const lis = ol.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = "green";
}

// Remove the div with a class of footer
const footerDivRemove = document.querySelector("div.footer");
footerDivRemove.textContent = "Test";
footerDivRemove.remove();