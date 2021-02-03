const Player = { 
  class:"", 
  health:"", 
  inventory:[],
  sick:false,
};

Player;

export const intro = () => {
  console.log("Choose who you are during this pandemic!");
  console.log("Child -All chances at getting covid reduced by 50%, less access to resources- (1)");
  console.log("Athlete -If catches covid, 50% of not turning into zombie, less access to resources- (2)");
  console.log("Elderly -All chances of getting covid increased by 50%, more access to resources- (3)");
  const input = prompt("Who are you?");
  if (input === "1" || input === "2" || input === "3") {
    return input;
  } else {
    console.log("Invalid input! Try agian.");
    return intro();
  }
};

export const playerSelect = (characterClass) => {
  if(characterClass === "1"){
    const initialChild = ({class: "Child", health: 30, sick: false, inventory: []});
    return initialChild;
  }else if (characterClass === "2"){
    const initialAthlete = ({class: "Athlete", health: 90, sick: false, inventory: []});
    return initialAthlete;
  }else if (characterClass === "3"){
    const initialElderly = ({class: "Elderly", health: 50, sick: false, inventory: ["yoohoo", "yoohoo", "tp"]});
    return initialElderly;
  }
};

// This function stores our state.

export const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const canDoThings = function(creature) {
  const obj = {
    eat: function(food) {
      return `The ${creature} eats the ${food}.`;
    },
    sleep: function() {
      return `The ${creature} sleeps.`;
    }
  };
  return obj;
};

const smallTp = changeState("health")(1);
smallTp;
const bigTp = changeState("health")(5);
bigTp;

//const player = storeState({class: "", health: "", sick: false, inventory: []});

// const initialElderly = ({class: "Elderly", health: 50, sick: false, inventory: ["yoohoo", "yoohoo", "tp"]});

// const initialChild = ({class: "Child", health: 30, sick: false, inventory: []});
// const initialAthlete = ({class: "Athlete", health: 90, sick: false, inventory: []});
// const initialZombie = ({class: "Zombie", health: -50, sick: true, inventory: []});
// player;
// initialAthlete;
// initialChild;
// initialChild;
// initialValues;
// initialElderly;
// initialZombie;