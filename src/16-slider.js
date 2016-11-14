import _ from 'lodash';

const direction = {
  'left': 0,
  'right': 1,
  'up': 2,
  'down': 3
};

const initGrid = (r, c) => {
  let g = [];
  for(let i=0; i < r*c; i++) {
    g.push(i);
  }
  return g;
};

class slider {
  constructor(r = 4, c = 4) {
    this._row = r;
    this._col = c;
    this.blank = 0; // position of the blank tile
    this._grid = initGrid(r, c);
  }

  /* Attempt to move the blank tile right */
  right() {
    if ((this.blank + 1) % this._col !== 0) {
      this._grid[this.blank] = this._grid[this.blank + 1];
      this.blank++;
      this._grid[this.blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  /* Attempt to move the blank tile left */
  left() {
    if (this.blank > 0 && (this.blank - 1) % this._col !== this._col - 1) {
      this._grid[this.blank] = this._grid[this.blank - 1];
      this.blank--;
      this._grid[this.blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  /* Attempt to move the blank tile up */
  up() {

  }

  /* Attempt to move the blank tile down */
  down() {

  }

  resetGrid() {
    _.forEach(this.grid, (tile, key) => {
      tile = key;
    });
    console.log(this.grid);
  }

  get grid() {
    return this._grid;
  }
}

export default slider;
