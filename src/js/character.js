// This function stores our state.

export const storeState = (initialState) => {
  let currentState = initialState;
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

export const playerSelect = (characterClass) => {
  if(characterClass === "1"){
    const initialChild = ({class: "Child", health: 30, sick: false, inventory: []});
    return initialChild;
  }else if (characterClass === "2"){
    const initialAthlete = ({class: "Athlete", health: 90, sick: false, inventory: []});
    return initialAthlete;
  }else if (characterClass === "3"){
    const initialElderly = ({class: "Elderly", health: 50, sick: false, inventory: ["yoohoo", "yoohoo", "tp", "tp"]});
    return initialElderly;
  }
};

// const initialValues = {soil: 0, water: 0, light: 0};
// const fern = storeState(initialValues);
// fern;

export const smallTp = changeState("health")(1);
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