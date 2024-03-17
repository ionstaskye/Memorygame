const gameContainer = document.getElementById("game");
let cardmatched = 0
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

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
function nodupearray(array)  {
  let nodupe =[]
  array.forEach(element => {
    if (!nodupe.includes(element))  {
      nodupe.push(element)
    }
    
  });
  return nodupe;
}
const nodupecolors = (nodupearray(COLORS))
let counter = 0
let firstsquare = ''
let secondsquare = ''
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  const pickedsquare = event.target
  counter++
  console.log(counter)

  for (i=0; i<nodupecolors.length; i++) {
    if (pickedsquare.classList == nodupecolors[i] && counter == 1)  {
      pickedsquare.style.backgroundColor = nodupecolors[i]
      pickedsquare.setAttribute('id',"firstpick")
      firstsquare += pickedsquare.className
      console.log(firstsquare)
      pickedsquare.removeEventListener("click",handleCardClick)
    }
    else if (pickedsquare.classList == nodupecolors[i] && counter == 2) {
      pickedsquare.style.backgroundColor = nodupecolors[i]
      secondsquare += pickedsquare.className
      pickedsquare.setAttribute('id',"secondpick")
      pickedsquare.removeEventListener("click",handleCardClick)
      counter = 0
        if (firstsquare != secondsquare)  {
            const selectfirst = document.getElementById("firstpick")
            const selectsecond = document.getElementById("secondpick")
        setTimeout (function()  {selectfirst.style.backgroundColor = 'white'}, 1000)
        setTimeout (function()  {selectsecond.style.backgroundColor = 'white'}, 1000)  
        selectfirst.addEventListener("click", handleCardClick)
        selectsecond.addEventListener("click", handleCardClick)
        selectfirst.removeAttribute("id", "firstpick")
        selectsecond.removeAttribute("id","secondpick")
        firstsquare = ''
        secondsquare = ''
      }
      else{
        const selectfirst = document.getElementById("firstpick")
        const selectsecond = document.getElementById("secondpick")
        selectfirst.removeAttribute("id", "firstpick")
        selectsecond.removeAttribute("id","secondpick")
        firstsquare = ''
        secondsquare = ''
        cardmatched += 2
      }
    }
    }
  }




// when the DOM loads
createDivsForColors(shuffledColors);
