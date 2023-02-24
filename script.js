const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 640;

const numRows = 12; // number of rows in the grid
const numCols = 12; // number of columns in the grid

const cellWidth = canvas.width / numCols; // width of each cell
const cellHeight = canvas.height / numRows; // height of each cell

// variables to control grayscale increment and maximum grayscale value
const grayIncrement = 255 / 12;
const maxGrayValue = 255;

// array for holding colors
const colors = [];
for (let i = 0; i <= maxGrayValue; i += grayIncrement) {
  const grayscale = `rgb(${i}, ${i}, ${i})`;
  colors.push(grayscale);
}


// draw a rectangle in each grid cell
for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numCols; j++) {
    const x = j * cellWidth;
    const y = i * cellHeight;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    ctx.fillStyle = randomColor;
    ctx.fillRect(x, y, cellWidth, cellHeight);
    ctx.strokeStyle = 'black';
    ctx.strokeRect(x, y, cellWidth, cellHeight);
    
  }
}