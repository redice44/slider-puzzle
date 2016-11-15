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
    this._blank = 0; // position of the blank tile
    this._grid = initGrid(r, c);
  }

  /* Attempt to move the blank tile right */
  right() {
    if ((this._blank + 1) % this._col !== 0) {
      this._grid[this._blank] = this._grid[this._blank + 1];
      this._blank++;
      this._grid[this._blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  /* Attempt to move the blank tile left */
  left() {
    if (this._blank > 0 && (this._blank - 1) % this._col !== this._col - 1) {
      this._grid[this._blank] = this._grid[this._blank - 1];
      this._blank--;
      this._grid[this._blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  /* Attempt to move the blank tile up */
  up() {
    if (this._blank >= this._col) {
      this._grid[this._blank] = this._grid[this._blank - this._col];
      this._blank -= this._col;
      this._grid[this._blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  /* Attempt to move the blank tile down */
  down() {
    if (Math.floor(this._blank / this._col) < this._row - 1) {
      this._grid[this._blank] = this._grid[this._blank + this._col];
      this._blank += this._col;
      this._grid[this._blank] = 0;
      return true;
    } else {
      return false;
    }
  }

  shuffleGrid(iterations = 1000) {
    for (let i = 0; i < iterations; i++) {
      switch(Math.floor(Math.random() * 4)) {
        case 0:
          this.right();
          break;
        case 1:
          this.left();
          break;
        case 2:
          this.up();
          break;
        case 3:
          this.down();
          break;
        default:
          // Do nothing
      }
    }
  }

  get grid() {
    return this._grid;
  }

  get blank() {
    return this._blank;
  }
}

export default slider;
