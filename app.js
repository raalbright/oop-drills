const person1 = {
    name: 'Ray',
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
};
const person2 = {
    name: 'JT',
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
};
const person3 = {
    name: 'JT',
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
};
const person4 = {
    name: 'Sean',
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
};
const person5 = {
    name: 'Austin',
    sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    }
};

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();
person5.sayHello();


/**
 *
 * ES5 
 *
 * function Person (name, age, city) {
 *     this.name = name;
 *     this.age = age;
 *     this.city = city
 * }
 *
 * Person.prototype.greet = function () {
 *     console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
 * }
 *
 */

class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet() {
        console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`);
    }
}

const personClass1 = new Person('Ray', 25, 'Center Point');
const personClass2 = new Person('JT', 26, 'Birmingham');
const personClass3 = new Person('Justin', 28, 'New York');
const personClass4 = new Person('Sean', 27, '');
const personClass5 = new Person('Austin', 23, 'Atlanta');

personClass1.greet();
personClass2.greet();
personClass3.greet();
personClass4.greet();
personClass5.greet();


class Vehicle {
    constructor(numOfWheels, manufacturer) {
        this.numOfWheels = numOfWheels;
        this.manufacturer = manufacturer
    }

    aboutVehicle() {
        return `Wheels: ${this.numOfWheels}\nManufacturer: ${this.manufacturer}`;
    }
}

class Truck extends Vehicle {
    constructor(numOfDoors, hasBed, manufacturer) {
        super(4, manufacturer);
        this.type = 'Truck';
        this.numOfDoors = numOfDoors;
        this.hasBed = hasBed;
    }
    aboutVehicle() {
        console.log(`Type: ${this.type}\n${super.aboutVehicle()}\nDoors: ${this.numOfDoors}\nBed: ${this.hasBed}`);
    }
}

class Sedan extends Vehicle {
    constructor(numOfDoors, size, mpg, manufacturer) {
        super(4, manufacturer);
        this.type = 'Sedan';
        this.numOfDoors = numOfDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`Type: ${this.type}\n${super.aboutVehicle()}\nDoors: ${this.numOfDoors}\nSize: ${this.size}\nMPG: ${this.mpg}`);
    }
}

class Motorcycle extends Vehicle {
    constructor(handleBars, hasDoors, manufacturer) {
        super(2, manufacturer);
        this.type = 'Motorcycle';
        this.handleBars = handleBars;
        this.hasDoors = hasDoors;
    }

    aboutVehicle() {
        console.log(`Type: ${this.type}\n${super.aboutVehicle()}\nHandle Bars: ${this.handleBars}\nDoors: ${this.hasDoors}`);
    }
}