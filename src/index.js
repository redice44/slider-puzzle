import Game from './16-slider';

const rows = 4;
const cols = 4;
const game = new Game(rows, cols);

const makeTile = (i) => {
  let tile = document.createElement('div');
  let text = document.createTextNode(i);
  tile.id = `tile-${i}`;
  tile.classList.add('tile');
  tile.appendChild(text);
  return tile;
};

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
};

const setListeners = () => {
  let blankPos = game.blank;

  /* Right */
  if ((blankPos + 1) % cols !== 0) {
    let rightTile = document.getElementById(`tile-${blankPos + 1}`);
    rightTile.classList.add('right');
    rightTile.addEventListener('click', rightTileListener);
  }

  /* Left */
  if (blankPos > 0 && (blankPos - 1) % cols !== cols - 1) {
    let leftTile = document.getElementById(`tile-${blankPos - 1}`);
    leftTile.classList.add('left');
    leftTile.addEventListener('click', leftTileListener);
  }

  /* Up */
  if (blankPos >= cols) {
    let upTile = document.getElementById(`tile-${blankPos - cols}`);
    upTile.classList.add('up');
    upTile.addEventListener('click', upTileListener);
  }

  /* Down */
  if (Math.floor(blankPos / cols) < rows - 1) {
    let downTile = document.getElementById(`tile-${blankPos + cols}`);
    downTile.classList.add('down');     
    downTile.addEventListener('click', downTileListener); 
  }
};

const removeListeners = () => {
  let blankPos = game.blank;

  /* Right */
  if ((blankPos + 1) % cols !== 0) {
    let rightTile = document.getElementById(`tile-${blankPos + 1}`);
    rightTile.classList.remove('right');
    rightTile.removeEventListener('click', rightTileListener);
  }

  /* Left */
  if (blankPos > 0 && (blankPos - 1) % cols !== cols - 1) {
    let leftTile = document.getElementById(`tile-${blankPos - 1}`);
    leftTile.classList.remove('left');
    leftTile.removeEventListener('click', leftTileListener);
  }

  /* Up */
  if (blankPos >= cols) {
    let upTile = document.getElementById(`tile-${blankPos - cols}`);
    upTile.classList.remove('up');
    upTile.removeEventListener('click', upTileListener);
  }

  /* Down */
  if (Math.floor(blankPos / cols) < rows - 1) {
    let downTile = document.getElementById(`tile-${blankPos + cols}`);
    downTile.classList.remove('down');     
    downTile.removeEventListener('click', downTileListener); 
  }
};

const updateGrid = () => {
  let grid = game.grid;
  grid.forEach((value, index) => {
    let tile = document.getElementById(`tile-${index}`);
    tile.innerHTML = value;
  });
};

const win = () => {
  console.log('Winner!');
  removeListeners();
};

const rightTileListener = () => {
  removeListeners();
  game.right();
  setListeners();
  updateGrid();
  if (game.isComplete()) {
    win();
  }
};

const leftTileListener = () => {
  removeListeners();
  game.left();
  setListeners();
  updateGrid();
  if (game.isComplete()) {
    win();
  }
};

const upTileListener = () => {
  removeListeners();
  game.up();
  setListeners();
  updateGrid();
  if (game.isComplete()) {
    win();
  }
};

const downTileListener = () => {
  removeListeners();
  game.down();
  setListeners();
  updateGrid();
  if (game.isComplete()) {
    win();
  }
};

const resetGame = () => {

};

const init = () => {
  let root = document.getElementById('game');
  root.appendChild(makeGrid(rows, cols));
  game.shuffleGrid();
  game.resetGrid();
  updateGrid();
  setListeners();
};

init();