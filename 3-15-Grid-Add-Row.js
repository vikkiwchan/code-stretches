// #add an addRow method to the Grid class.

class Grid {
  constructor(width, height) {
    this.height = height;
    this.width = width;
    this._array = Array(height * width);
  }

  _innerIdx(x, y) {
    return y * this.width + x;
  }

  at(x, y) {
    return this._array[this._innerIdx(x, y)];
  }

  set(x, y, value) {
    this._array[this._innerIdx(x, y)] = value;
  }

  row(n) {
    return this._array.slice(n * this.width, (n + 1) * this.width);
  }

  addRow(arr) {
    this.height += 1;
    this._array = [...this._array, ...arr];
  }

  col(n) {
    const output = [];
    for (; n < this._array.length; n += this.width) {
      output.push(this._array[n]);
    }
    return output;
  }

  twoDim() {
    const output = [];
    for (let row = 0; row < this.height; row++) {
      output.push(this.row(row));
    }
    return output;
  }

  fill() {
    for (let i = 0; i < this._array.length; this._array[i] = i++);
  }
}

const theGrid = new Grid(5, 5);
theGrid.fill();
theGrid.addRow([25, 26, 27, 28, 29]);
console.log(theGrid.twoDim());
// console.log(theGrid.col(4));

/*
[ [ 0, 1, 2, 3, 4 ],
  [ 5, 6, 7, 8, 9 ],
  [ 10, 11, 12, 13, 14 ],
  [ 15, 16, 17, 18, 19 ],
  [ 20, 21, 22, 23, 24 ],
  [ 25, 26, 27, 28, 29 ] ]
*/
