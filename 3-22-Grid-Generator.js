// write generateGrid

const generateGrid = (rowNum, colNum, elem) => {
  const row = () => Array(colNum).fill(elem);
  let grid = [];
  while (rowNum > 0) {
    grid.push(row());
    rowNum--;
  }
  return grid;
};

let grid = generateGrid(2, 2, 3);
grid[0][0] = 5;

console.log(grid); //[ [ 3, 3 ], [ 3, 3 ] ]
// console.log(generateGrid(2, 5, 42)); //[ [ 42, 42, 42, 42, 42 ], [ 42, 42, 42, 42, 42 ] ]
// console.log(generateGrid(1, 2, true)); //[ [ true, true ] ]

/*
BE CAREFUL OF PBR - pass by reference error

a “reference error” does not give any error messages or anything- but it’s a grid with behavior that you would not expect
row is created ONCE, that means when you do new Array(height).fill(row), you put the same exact row into the new Array

this is because it’s the same exact array duplicated twice in the grid. since it’s the same array, it’s the same memory location too
if you modify one element, it modifies that entire column because it’s the same array duplicated multiple times

//STANLEY SOLUTION
const grid = new Array(height).fill('a value that you dont care about').map(_ => new Array(width).fill(fill));

in here, with each iteration of map, you’re creating a brand new array (´・◡・｀)
//

function generateGrid(height, width, fill) {
  const row = new Array(width).fill(fill);
  const grid = new Array(height).fill(row);
  return grid;
}
const grid = generateGrid(2, 2, 10);
grid is
[10, 10]
[10, 10]
grid[0][0] = 15;
you would think grid is
[15, 10]
[10, 10]
right?
but no- grid is actually
[15, 10]
[15, 10]
*/
