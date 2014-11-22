 // U3.W7: Design your own Code Combat Mission

// This is a solo challenge

// Your mission description:

// Overall mission:
  /* Ragnar is wounded and needs to send out his hawk to gather food. Collect a basket and 2 rabbits and bring them back to Ragnar. */

  /* post-MVP Enhancements: Ragnar's hawk is very smart, and can carry a basket to carry the weight
  of up to 2 rabbits. However, Ragnar does not have a basket with him, so the hawk must find one.
  Note: once it has a basket, the hawk only has enough energy to carry it back toward Ragnar (down
  or right). */

// Goals:
  // 1. collect a basket
  // 2. pick up two rabbits
  // 3. return to Ragnar

// Characters:
  // Ragnar's hawk
  // Ragnar

// Objects:
  // Ragnar's hawk. properties: basket
  // Ragnar
  // basket. properties: # of rabbits
  // rabbits

// Functions:
// getBasket - adds basket property to hawk;
// addRabbit - adds 1 to the count of rabbits, a property of basket;
// rabbitCount - look up how many rabbits are in the basket's rabbit property;

// future enhancements: flyUp(); flyDown(); flyLeft(); flyRight(); pickupBasket(); catchRabbit(); win();

// Pseudocode
// create object literals for the objects listed above
//
// function getBasket - sets basket property in hawk equal to the basket object;
// function addRabbit - adds 1 to the rabbits property of basket;
// function rabbitCount - returns the number of rabbits in the basket;
// After getting these working, set up HTML and experiment with other methods

// Initial Code

var hawk = {};
var basket = {};
var ragnar = {};
var rabbit1 = {};
var rabbit2 = {};
var rabbit3 = {};

var hawkIcon = document.getElementById("ragnarsHawk");
var basketIcon = document.getElementById("basket");

var rabbit1Icon = document.getElementById("rabbit1");
var rabbit2Icon = document.getElementById("rabbit2");
var rabbit3Icon = document.getElementById("rabbit3");

var getBasket = function() {
  hawk.basket = basket;
};

var addRabbit = function() {
  if (!basket.rabbits)
    basket.rabbits = 1;
  else
    basket.rabbits++;
};

var rabbitCount = function() {
  return basket.rabbits;
};


var fromBottom = 0;
var fromRight = 0;

var fly = function(keystroke) {
  if ((keystroke.keyCode === 37) && (fromRight < 525)) { // left
    if (!hawk.basket) {
      fromRight += 75;
      hawkIcon.style.right = fromRight + "px";
    }
  }
  else if ((keystroke.keyCode === 38) && (fromBottom < 525)) { // up
    if (!hawk.basket) {
      fromBottom += 75;
      hawkIcon.style.bottom = fromBottom + "px";
    }
  }
  else if ((keystroke.keyCode === 39) && (fromRight > 0)) { // right
    fromRight -= 75;
    hawkIcon.style.right = fromRight + "px";
  }
  else if ((keystroke.keyCode === 40) && (fromBottom > 0)) { // down
    fromBottom -= 75;
    hawkIcon.style.bottom = fromBottom + "px";
  }
  pickupBasket();
  catchRabbit();
  win();
};

var pickupBasket = function() {
  if ((fromBottom === 525) && (fromRight === 525)) {
    var pickup = confirm("Do you want to pick up the basket?");
    if (pickup) {
      getBasket();
      basketIcon.style.right = 700 + "px";
    }
  }
};

var catchRabbit = function() {
  if (hawk.basket) {
    if ((fromBottom === 450) && (fromRight === 150) && (rabbit1Icon.style.right !== "700px")) {
      addRabbit();
      rabbit1Icon.style.right = "700px";
    }
    else if ((fromBottom === 150) && (fromRight === 450) && (rabbit2Icon.style.right !== "700px")) {
      addRabbit();
      rabbit2Icon.style.right = "700px";
      rabbit2Icon.style.bottom = "375px";
    }
    else if ((fromBottom === 150) && (fromRight === 225) && (rabbit3Icon.style.right !== "700px")) {
      addRabbit();
      rabbit3Icon.style.right = "700px";
      rabbit3Icon.style.bottom = "300px";
    }
  }
};

var win = function() {
  if ((fromRight === 0) && (fromBottom === 0)) {
    if (rabbitCount() === 2) {
      alert("You returned to Ragnar with 2 rabbits and helped him survive! You win!");
    }
    else {
      alert("You returned to Ragnar but failed to bring 2 rabbits. Try again by reloading the page.");
    }
  }
};


document.onkeydown = fly;


// Refactored Code






// Reflection
//
//
//
//
//
//
//
