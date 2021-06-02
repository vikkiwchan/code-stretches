/*
Write a function that takes a string and number as arguments.
This function should return a "zigzaged" version of the provided string based on the provided number.
See example below

example: zigzaged("DynamiteJack",4)

Output: "DtyieknmJcaa"

D  y  n  a  m  i  t  e  J  a  c  k
0  1  2  3  4  5  6  7  8  9  10 11

[    0).  1). 2). 3).
0). ['D', '', '', ''],
1). ['', 'y', '', ''],
2). ['', '', 'n', ''],
3). ['', '', '', 'a'],
4). ['', '', 'm', ''],
5). ['', 'i', '', ''],
6). ['t', '', '', ''],
7). ['', 'e', '', ''],
8). ['', '', 'J', ''],
9). ['', '', '', 'a'],
10).['', '', 'c', ''],
11).['', 'k', '', ''],
]

1) D          t
2)   y      i   e      k
3)     n  m      J   c
4)       a         a

** output visualized as a zigzag **
*/

// get max length of DynamiteJack
// loop thorough each char and create a nested arrays of X-column wide rows, use Arra.fill here
// use modulo to determine if the index needs to go backwards
// loop though each array, if there is an index value that matches, print on same line

const zigzaged = (str, num) => {
  const gridHeight = str.length;
  let grid = [];
  let idxPos = 0;
  let forward = true;
  let result = '';
  let gridIdx = 0;
  let gridRowIdx = 0;
  str.split('').forEach((char) => {
    let row = Array(num).fill(' ');
    row.splice(idxPos, 1, char);
    grid.push(row);
    if (idxPos === num - 1) {
      forward = false;
    }
    if (idxPos === 0) {
      forward = true;
    }
    if (idxPos < num && forward) {
      idxPos += 1;
    }
    if (idxPos > 0 && !forward) {
      idxPos -= 1;
    }
  });

  while (gridIdx < gridHeight) {
    while (gridRowIdx < num) {
      let numListItem = 1 + gridRowIdx;
      result += `${numListItem}) `;
      grid.forEach((row) => {
        result += row[gridRowIdx];
      });
      result += '\n';
      gridRowIdx++;
    }
    gridIdx++;
  }
  return result;
};

console.log(zigzaged('DynamiteJack', 4));

// SAM FEDENIA'S SOLUTION
/*
const zigzaged = (str, numRows) => {
  let rows = [];
  while (numRows--) rows[numRows] = [`${numRows + 1})`];
  const len = rows.length;
  let inc;
  let i = 0;
  let j = 0;
  const delim = ' ';
  for (let char of str) {
    if (i === 0) inc = true;
    else if (i === len - 1) inc = false;
    rows[i].push(char);
    for (let q = 0; q < len; q++) {
      if (q !== i) {
        rows[q].push(delim);
      }
    }
    if (inc) i++;
    else i--;
    j++;
  }
  return rows.map((row) => row.join(' ')).join('\n');
};
*/
