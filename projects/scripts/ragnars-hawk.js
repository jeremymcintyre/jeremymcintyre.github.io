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
/*
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
*/

// Refactored Code

var hawk = {};
var basket = {};
var ragnar = {};
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

var flyLeft = function() {
  if (!hawk.basket) {
    fromRight += 75;
    hawkIcon.style.right = fromRight + "px";
  }
};
var flyUp = function() {
  if (!hawk.basket) {
    fromBottom += 75;
    hawkIcon.style.bottom = fromBottom + "px";
  }
};
var flyRight = function() {
  fromRight -= 75;
  hawkIcon.style.right = fromRight + "px";
};
var flyDown = function() {
  fromBottom -= 75;
  hawkIcon.style.bottom = fromBottom + "px";
};




var fly = function(keystroke) {
  if ((keystroke.keyCode === 37) && (fromRight < 525)) { flyLeft(); }
  else if ((keystroke.keyCode === 38) && (fromBottom < 525)) { flyUp(); }
  else if ((keystroke.keyCode === 39) && (fromRight > 0)) { flyRight(); }
  else if ((keystroke.keyCode === 40) && (fromBottom > 0)) { flyDown(); }
  pickupBasket();
  catchRabbit();
  win();
};



var storeItem = function(id, relativeBottom) {
  id.style.right = "700px";
  id.style.bottom = relativeBottom + "px";
};

var pickupBasket = function() {
  if ((fromBottom === 525) && (fromRight === 525)) {
    var pickup = confirm("Do you want to pick up the basket?");
    if (pickup) {
      getBasket();
      storeItem(basketIcon, 525);
    }
  }
};

var catchRabbit = function() {
  if (hawk.basket) {
    if ((fromBottom === 450) && (fromRight === 150)) {
      addRabbit();
      storeItem(rabbit1Icon, 450);
    }
    else if ((fromBottom === 150) && (fromRight === 450)) {
      addRabbit();
      storeItem(rabbit2Icon, 375);
    }
    else if ((fromBottom === 150) && (fromRight === 225)) {
      addRabbit();
      storeItem(rabbit3Icon, 300);
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


// Reflection

/*

I learned a lot from this challenge. I started out really basic with my getBasket(), addRabbit(), and rabbitCount()
functions with some driver code to make sure they were working correctly. That actually didn't take too long, but I
did need to fix my syntax a few times, so it was definitely helpful to keep cementing my grasp on that.

Next I wanted to extend my initial solution to experiment with manipulating objects on the DOM. In order to do
this, I had to first build a page with some images and a game box, which I did. Creating the gamescreen reminded me
that absolute positioning is only relative to the parent div if the parent div features positioning other than
static. Once I did this, I got my icons placed and sized appropriately according to how I wanted them to begin.

Now came the fun, and also more difficult part. The first thing to do was tackle getting my hawk icon to move. I
learned how to set variables to point to DOM elements using getElementById, and how to change css style values
using the style property. Later I realized that I also needed to tell when to execute the fly function, which I did
by incorporating document.onkeydown = fly. Since this was basically the only interaction that told functions to
execute, I had to fold my other functions like pickupBasket(), catchRabbit(), and win() into the end of the fly
function.

When refactoring, I tried to extract out single responsibility. I made separate flyUp, flyDown, etc. functions, and
also a storeItem() function to get icons offscreen in an orderly way. Whenever I wasn't sure of whether something
was working, I added an alert or confirm just to check that it was interacting when I expected it to.

*/