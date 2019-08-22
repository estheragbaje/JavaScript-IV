/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//Constructor Function for First Code
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.stomach = [];
// }

// Person.prototype.greet = function() {
//   return `Hiii, my name is ${this.name} and I am ${this.age} years old`;
// };

// Person.prototype.eating = function(food) {
//   this.stomach.push(food);
// };

// Person.prototype.poop = function() {
//   this.stomach = [];
// };

// const sade = new Person("soso", 20);
// sade.eating("chicken");
// sade.eating("rice");
// sade.poop();
// console.log(sade);

//Refactoring using class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  greet() {
    return `Hiii, my name is ${this.name} and I am ${this.age} years old`;
  }

  eating(food) {
    this.stomach.push(food);
  }

  poop() {
    this.stomach = [];
  }
}

const sade = new Person("soso", 20);
sade.eating("chicken");
sade.eating("rice");
sade.poop();
console.log(sade);

//Constructor Function for Code Two
// function Car(name, make) {
//   this.name = name;
//   this.make = make;
//   this.canBeDriven = true;
// }

// Car.prototype.drive = function(distance) {
//   this.odometer = distance;
// };
// Car.prototype.crash = function() {
//   this.canBeDriven = false;
//   return `I crashed at ${this.odometer} miles!`;
// };

// Car.prototype.repair = function() {
//   this.canBeDriven = true;
// };

// const ford = new Car("Ford", "Explorer");
// ford.drive(20);
// let crasher = ford.crash();
// console.log(crasher);
// ford.repair();
// console.log(ford);

//Refactoring using class
class Car {
  constructor(name, make) {
    this.name = name;
    this.make = make;
    this.canBeDriven = true;
  }

  drive(distance) {
    this.odometer = distance;
  }

  crash() {
    this.canBeDriven = false;
    return `I crashed at ${this.odometer} miles!`;
  }

  repair() {
    this.canBeDriven = true;
  }
}

const ford = new Car("Ford", "Explorer");
ford.drive(20);
let crasher = ford.crash();
console.log(crasher);
ford.repair();
console.log(ford);

//Constructor Function for Code Three
// function Baby(name, age) {
//   Person.call(this, name, age);
// }
// Baby.prototype = Object.create(Person.prototype);
// Baby.prototype.play = function() {
//   return `Daddy I want to play`;
// };

// const demi = new Baby("Demi", 1);
// console.log(demi);

//Refactoring using class
class Baby extends Person {
  constructor(name, age) {
    super(name, age);
  }

  play() {
    return `Daddy I want to play`;
  }
}
const demi = new Baby("Demi", 1);
const demiPlay = demi.play();
console.log(demiPlay);
console.log(demi);

// Constructor Function for Code Four
// function User(name, email, password) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
//   this.isLoggedIn = true;
// }

// User.prototype.login = function(email, password) {
//   if (email === this.email && password === this.password) {
//     return `I have successfully logged in`;
//   } else {
//     return `Email or Password Invalid`;
//   }
// };

// User.prototype.logout = function() {
//   this.isLoggedIn = false;
// };

// User.prototype.resetPassword = function(newPassword) {
//   this.password = newPassword;
//   return `Password successfully reset`;
// };

// const segun = new User("Segun", "segun@yahoo.com", "segun001");
// console.log(segun);

// segun.logout();
// console.log(segun);

// const outcome = segun.login("segun@yahoo.com", "segun1");
// console.log(outcome);

// const outcome1 = segun.login("segun@yahoo.com", "segun001");
// console.log(outcome1);

// const outcome2 = segun.resetPassword("sage");
// console.log(outcome2);

// console.log(segun);

//Refactoring using class

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isLoggedIn = true;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      return `I have successfully logged in`;
    } else {
      return `Email or Password Invalid`;
    }
  }

  logout() {
    this.isLoggedIn = false;
  }

  resetPassword(newPassword) {
    this.password = newPassword;
    return `Password successfully reset`;
  }
}

const segun = new User("Segun", "segun@yahoo.com", "segun001");
console.log(segun);

segun.logout();
console.log(segun);

const outcome = segun.login("segun@yahoo.com", "segun1");
console.log(outcome);

const outcome1 = segun.login("segun@yahoo.com", "segun001");
console.log(outcome1);

const outcome2 = segun.resetPassword("sage");
console.log(outcome2);

console.log(segun);
