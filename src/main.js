import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { playerSelect, storeState, stateControl, changeState, canDoThings, intro} from './js/character.js';
$;
storeState;
stateControl;
changeState;
canDoThings;


$("#startGame").submit(function(event) {
  event.preventDefault();
  const characterClass = intro();
  console.log(characterClass);
  characterClass;
  const currentPlayer = playerSelect(characterClass);
  console.log(currentPlayer);

});