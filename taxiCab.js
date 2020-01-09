// currentPosition = {x: 0, y:0};
// if arr[0] === 'right' x += arr[1];
// if arr[0] === 'left' y += arr[1];
// we need 4 movement functions : x += num, x -= num, y += num, y -= num

const position = {
  currentPosition: { east: 0, north: 0 },
  currentDirection: null,

  numOfSteps: null,
  moveUp() {
    this.currentPosition.north += this.numOfSteps;
  },
  moveDown() {
    this.currentPosition.north -= this.numOfSteps;
  },
  moveRight() {
    this.currentPosition.east += this.numOfSteps;
  },
  moveLeft() {
    this.currentPosition.east -= this.numOfSteps;
  },
  changeDirection(movement) {
    movement === "right"
      ? this.currentDirection !== 0
        ? (this.currentDirection = this.currentDirection - 1)
        : (this.currentDirection = 3)
      : (this.currentDirection = (this.currentDirection + 1) % 4);
  },
  initializePosition(direction, steps) {
    direction === "right"
      ? (this.currentDirection = 3)
      : (this.currentDirection = 0);
    this.numOfSteps = steps;
    switch (this.currentDirection) {
    case 0:
      this.moveUp();
      break;
    case 3:
      this.moveRight();
    }
  },
  makeMove(direction, steps) {
    this.changeDirection(direction);
    this.numOfSteps = steps;
    switch (this.currentDirection) {
    case 0:
      this.moveUp();
      break;
    case 1:
      this.moveLeft();
      break;
    case 2:
      this.moveDown();
      break;
    case 3:
      this.moveRight();
      break;
    }
  },
  movement: [this.moveUp, this.moveLeft, this.moveDown, this.moveRight]
};

const blocksAway = direction => {
  position.initializePosition(direction[0], direction[1]);

  for (let i = 2; i < direction.length; i += 2) {
    position.makeMove(direction[i], direction[i + 1]);
  }

  return position.currentPosition;
};
//blocksAway();
//console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
// console.log(
//   blocksAway([
//     "left",
//     1,
//     "right",
//     1,
//     "left",
//     1,
//     "right",
//     1,
//     "left",
//     1,
//     "right",
//     1
//   ])
// );
//console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
