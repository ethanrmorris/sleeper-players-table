import './style.css';
import allPlayers from './players.js';

const playerEl = document.querySelector('#table');

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([player]) =>
        `<tr><td>${player.id}</td><td>${player.full_name}</td><td>${player.fantasy_positions}</td><td>${player.years_exp}</td><td>${player.team}</td><td>${player.status}</td></tr>`
    )
    .join('');
}

const optionsHTML = generateOptions(allPlayers);
console.log(optionsHTML);

playerEl.innerHTML = optionsHTML;
