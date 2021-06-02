/*
Create a Car Class / Constructor Function
A car should have the following properties: maker (string), model (string), year (number), mpg (number), topSpeed (number), currentSpeed (number - should start off as 0; must be >= 0 at all times.).
A car should have the following method's on it's prototype: accelerate (takes a number to add to currentSpeed), decelerate (takes a number to subtract from currentSpeed)
*/

class Car {
  constructor(maker, model, year, mpg, topSpeed, currentSpeed = 0) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.mpg = mpg;
    this.topSpeed = topSpeed;
    this.currentSpeed = currentSpeed;
  }
  accelerate(num) {
    this.currentSpeed += num;
  }
  decelerate(num) {
    if (num > this.currentSpeed) {
      this.currentSpeed = 0;
    } else {
      this.currentSpeed -= num;
    }
  }
}

const tundra = new Car('Toyota', 'Tundra', 2004, 14, 120);

console.log(tundra.currentSpeed); // 0
tundra.accelerate(20);
console.log(tundra.currentSpeed); // 20
tundra.decelerate(30);
console.log(tundra.currentSpeed); // 0

console.log(Object.getPrototypeOf(tundra).hasOwnProperty('accelerate')); // true
console.log(Object.getPrototypeOf(tundra).hasOwnProperty('decelerate')); // true
