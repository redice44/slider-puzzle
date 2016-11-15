/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slider = __webpack_require__(1);

	var _slider2 = _interopRequireDefault(_slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rows = 4;
	var cols = 4;
	var game = new _slider2.default(rows, cols);

	var makeTile = function makeTile(i) {
	  var tile = document.createElement('div');
	  var text = document.createTextNode(i);
	  tile.classList.add('tile');
	  tile.appendChild(text);
	  return tile;
	};

	var makeGrid = function makeGrid(r, c) {
	  var grid = document.createElement('div');
	  grid.classList.add('grid');
	  for (var i = 0; i < r; i++) {
	    var row = document.createElement('div');
	    row.classList.add('row');
	    for (var j = 0; j < c; j++) {
	      row.appendChild(makeTile(i * r + j));
	    }
	    grid.appendChild(row);
	  }
	  return grid;
	};

	var init = function init() {
	  var root = document.getElementById('game');
	  root.appendChild(makeGrid(rows, cols));
	};

	init();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var initGrid = function initGrid(r, c) {
	  var g = [];
	  for (var i = 0; i < r * c; i++) {
	    g.push(i);
	  }
	  return g;
	};

	var slider = function () {
	  function slider() {
	    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
	    var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

	    _classCallCheck(this, slider);

	    this._row = r;
	    this._col = c;
	    this.blank = 0; // position of the blank tile
	    this._grid = initGrid(r, c);
	  }

	  /* Attempt to move the blank tile right */


	  _createClass(slider, [{
	    key: "right",
	    value: function right() {
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

	  }, {
	    key: "left",
	    value: function left() {
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

	  }, {
	    key: "up",
	    value: function up() {
	      if (this.blank >= this._col) {
	        this._grid[this.blank] = this._grid[this.blank - this._col];
	        this.blank -= this._col;
	        this._grid[this.blank] = 0;
	        return true;
	      } else {
	        return false;
	      }
	    }

	    /* Attempt to move the blank tile down */

	  }, {
	    key: "down",
	    value: function down() {
	      if (Math.floor(this.blank / this._col) < this._row - 1) {
	        this._grid[this.blank] = this._grid[this.blank + this._col];
	        this.blank += this._col;
	        this._grid[this.blank] = 0;
	        return true;
	      } else {
	        return false;
	      }
	    }
	  }, {
	    key: "shuffleGrid",
	    value: function shuffleGrid() {
	      var iterations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

	      for (var i = 0; i < iterations; i++) {
	        switch (Math.floor(Math.random() * 4)) {
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
	  }, {
	    key: "grid",
	    get: function get() {
	      return this._grid;
	    }
	  }]);

	  return slider;
	}();

	exports.default = slider;

/***/ }
/******/ ]);