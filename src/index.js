import Game from './16-slider';

const rows = 4;
const cols = 4;
const game = new Game(rows, cols);

const makeTile = (i) => {
  let tile = document.createElement('div');
  let text = document.createTextNode(i);
  tile.classList.add('tile');
  tile.appendChild(text);
  return tile;
}

const makeGrid = (r, c) => {
  let grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < r; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < c; j++) {
      row.appendChild(makeTile(i * r + j));
    }
    grid.appendChild(row);
  }
  return grid;
}

const init = () => {
  let root = document.getElementById('game');
  root.appendChild(makeGrid(rows, cols));
};

init();