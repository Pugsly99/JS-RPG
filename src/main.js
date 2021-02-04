import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { playerSelect, storeState, stateControl, changeState, canDoThings, smallTp } from './js/character.js';
$;
storeState;
stateControl;
changeState;
canDoThings;

function intro() {
  console.log("Choose who you are during this pandemic!");
  console.log("Child -All chances at getting covid reduced by 50%, less access to resources- (1)");
  console.log("Athlete -If catches covid, 50% of not turning into zombie, less access to resources- (2)");
  console.log("Elderly -All chances of getting covid increased by 50%, more access to resources- (3)");
  const input = prompt("Who are you? Enter 1 for a child, 2 for an athlete, 3 for an elder");
  if (input === "1" || input === "2" || input === "3") {
    return input;
  } else {
    console.log("Invalid input! Try agian.");
    return intro();
  }
}

$(document).ready(function () {
  // event.preventDefault();
  $("#startGame").click(function () {
    const currentPlayer = storeState(playerSelect(intro()));
    console.log(currentPlayer());
    $("#class-value").text(currentPlayer().class);
    currentPlayer().inventory.forEach(item => $("#inventory-value").append(`${item}, `));
    $("#health-value").text(currentPlayer().health);

    $("#addHealth").click(function () {
      if (currentPlayer().inventory.includes("tp")) {
        for (let i = -1, y = 0; i < y; y++) {
          if (currentPlayer().inventory[y] === "tp") {
            currentPlayer().inventory.splice(i);
            const newCurrentPlayer = currentPlayer(smallTp);
            $("#inventory-value").empty();
            newCurrentPlayer.inventory.forEach(item => $("#inventory-value").append(`${item}, `));
            $("#health-value").text(newCurrentPlayer.health);
            i += y + 2;
            return;
          }
        }
      } else {
        console.log("Your out of toilet paper!");
      }
      // $("#health-value").text(currentPlayer().health);
      // $("#inventory-value").empty();
      // currentPlayer().inventory.forEach(item => $("#inventory-value").append(`${item}, `));
    });
  });
});


// $('#addHealth').click(function() {
//   const currentHealth = stateControl();
//   $('#health-value').text(currentHealth.health);
// });

// if ((player.strength + (Math.floor(Math.random()* 20) + 1)) > enemy.armorTotal) {
//   let damageDealt = (player.equippedMeleeWeapon.weaponStrength + (Math.floor(Math.random()* 20) + 1));
//   enemy.health -= damageDealt;
//   console.log(`You have dealt the ${enemy.id} ${damageDealt} damage! They appear to have ${enemy.health} health remaining.`);
// } else {
//   console.log("You Missed.");
// }