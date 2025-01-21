class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  displayInfo(): string {
    return `Car: ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Honda", "Fit");

console.log(myCar.displayInfo());
