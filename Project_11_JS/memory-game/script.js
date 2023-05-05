const myForm = document.querySelector('form');
const myButton = document.querySelector('#myButton');

myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
const numColorsInput = document.querySelector('#numColors');
const numColors = parseInt(numColorsInput.value);

myButton.disabled = true; // Disable the button after it is clicked

const COLORS = getRandomColors(numColors);
console.log(COLORS);


const gameContainer = document.getElementById("game");

function getRandomColors(numColors) {
  const colorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","WhiteSmoke","Yellow","YellowGreen"];

  const COLORS = [];

  for (let i = 0; i < numColors / 2; i++) {
    const colorIndex = Math.floor(Math.random() * colorNames.length);
    const tempColor = colorNames[colorIndex];

    COLORS.push(tempColor);
    COLORS.push(tempColor);

    colorNames.splice(colorIndex, 1);
  }

  return COLORS;
}

// const COLORS = [
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "red",
//   "blue",
//   "green",
//   "orange",
//   "purple",
//   "gray",
//   "black"
// ];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {

  if (!handleCardClick.allowClick) {
    return;
  }

  handleCardClick.clickedDivs = handleCardClick.clickedDivs || [];

  if (handleCardClick.clickedDivs.length > 0 && event.target === handleCardClick.clickedDivs[0]) {
    return;
  }

  const originalColor = event.target.style.backgroundColor;

  const currentColor = event.target.className;
  if (currentColor !== originalColor) {
    event.target.style.backgroundColor = event.target.className;

    handleCardClick.clickedDivs = handleCardClick.clickedDivs || [];
    handleCardClick.clickedDivs.push(event.target);
    handleCardClick.clicks = (handleCardClick.clicks || 0) + 1;
    if (handleCardClick.clicks === 2) {
      handleCardClick.clicks = 0;

      handleCardClick.allowClick = false;

      setTimeout(function() {
        const clickedDivs = handleCardClick.clickedDivs;

        if (clickedDivs.length === 2 && clickedDivs[0].style.backgroundColor !== clickedDivs[1].style.backgroundColor) {
          handleCardClick.clickedDivs.forEach(function(div) {
          div.style.backgroundColor = originalColor;
          });
        }
      handleCardClick.clickedDivs = [];

      handleCardClick.allowClick = true;
    }, 1000);
    }
  }

  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

handleCardClick.allowClick = true;

// when the DOM loads
createDivsForColors(shuffledColors);
});

const reloadButton = document.querySelector('#reloadButton');

reloadButton.addEventListener('click', function() {
  location.reload();
});