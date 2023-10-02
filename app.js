let DucksContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

function Ducks(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

function getRandomIndex() {
  return Math.floor(Math.random() * allDucks.length);
}

// function to render 2 random goats
function renderDuck() {
  // get 2 rnadom indexes from our goat array
  let duck1Index = getRandomIndex();
  let duck2Index = getRandomIndex();
  let duck3Index = getRandomIndex();

  // prevent the two images being the same goat
  while (
    duck1Index === duck2Index ||
    duck1Index === duck3Index ||
    duck2Index === duck3Index
  ) {
    duck2Index = getRandomIndex();
  }

  // change the src of our 2 images
  image1.src = allDucks[duck1Index].src;
  image2.src = allDucks[duck2Index].src;
  image3.src = allDucks[duck3Index].src;

  image1.alt = allDucks[duck1Index].name;
  image2.alt = allDucks[duck2Index].name;
  image3.alt = allDucks[duck3Index].name;

  // increase the goats views
  allDucks[duck1Index].views++;
  allDucks[duck2Index].views++;
  allDucks[duck3Index].views++;
}

// handle the goat being clicked
function handleDuckClick(event) {
  // get the name of the goat we just clicked
  let clickedDuck = event.target.alt;

  // check if the click is on an image
  if (event.target === DucksContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderDuck();
  }

  // increase the clicks of the goat
  // loop through allGoats
  for (let i = 0; i < allDucks.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    if (clickedDuck === allDucks[i].name) {
      // increase the number of clicks
      allDucks[i].clicks++;
      // stop the for loop because we found the goat
      break;
    }
  }
}

const allDucks = [
  new Ducks("Bag", "./assets/bag.jpg"),
  new Ducks("Banana", "./assets/banana.jpg"),
  new Ducks("Bathroom", "./assets/bathroom.jpg"),
  new Ducks("Breakfast", "./assets/breakfast.jpg"),
  new Ducks("Chair", "./assets/chair.jpg"),
];

DucksContainer.addEventListener("click", handleDuckClick);

renderDuck();
