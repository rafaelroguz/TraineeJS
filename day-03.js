// FUNCTIONS AS CONSTRUCTORS

// Create a function called `Vehicle` that accepts
// a driver as an argument and assign the driver
// to the context and execute it as a constructor
function Vehicle(driver) {
  this.driver = driver;
}

var vehicle = new Vehicle({name: 'john', licence: 1234567});

// Create a function called `Car` that accepts a driver,
// calls the function `Vehicle` with `call` and pass the
// driver and assign the speed in the context to 0
function Car(driver) {
	Vehicle.call(this, driver);
	this.speed = 0;
}
  
var teslaS = new Car("john");

// Add a function called `drive`, `stop` and `speed` to
// the `Car` prototype. Every time you call the
// `drive` "method" it sets the `speed` to `50`,
// every time you call the "method" `stop` it sets the
// speed to `0` and finally every time you call the
// "method" `getSpeed` it returns the speed
Car.prototype.stop = function() {
	this.speed = 0;
};

Car.prototype.drive = function() {
	this.speed = 50;
};

Car.prototype.getspeed = function() {
	return this.speed;
};

// CLASSES

// Create a class called `Vehicle` that accepts
// a driver as an argument on the constructor
//  and assign the driver to the context
class Vehicle {
  constructor(driver) {
    this.driver = driver;
  }
}

var vehicle = new Vehicle("john");

// Create a class called `Car` that accepts a driver,
// extends the `Vehicle` class and passes the driver
// to the `Car` constructor driver and assign the
// speed in the context to 0
class Car extends Vehicle {
  constructor(driver) {
    super(driver);
    this.speed = 0;
  }
}

var teslaS = new Car("john"); /* = @TODO */

// Add the methods `drive`, `stop` and `getSpeed` to
// the `Car` class. Every time you call the
// `drive` "method" it sets the `speed` to `50`,
// every time you call the "method" `stop` it sets the
// speed to `0` and finally every time you call the
// "method" `getSpeed` it returns the speed
class Car extends Vehicle {
  constructor(driver) {
    super(driver);
    this.speed = 0;
  }

  drive() {
    this.speed = 50;
  }

  stop() {
    this.speed = 0;
  }

  speed() {
    return this.speed;
  }
}

//
// SET PROTOTYPE OF
// Links the prototype attribute of a created object to another object

// Replicate all the previous examples using
// plain objects and `Object.setPrototypeOf`

// 1
var vehicle = {
  driver: "john"
};

// 2
var car = {
	speed: 0
};

Object.setPrototypeOf(car, vehicle);

// 3

var vehicle = {
  driver: "john"
};

var car = {
	speed: 0,
	drive: function() {
		this.speed = 50;
	},
	stop: function() {
		this.speed = 0;
	},
	getSpeed: function() {
		return this.speed;
	}
};

Object.setPrototypeOf(car, vehicle);

//
// OBJECT CREATE
// creates a new object and assings a prototype (link to another object)

// Replicate all the previous examples using
// plain objects and `Object.create`

// 1
var vehicle = {
	driver: 'john'
}

// 2
var car = Object.create(vehicle);
car.speed = 0;

// 3
var car = Object.create(vehicle);
car.speed = 0;
car.drive = function() {
	this.speed = 50;
};
car.stop = function() {
	this.speed = 0;
}
car.getSpeed = function() {
	return this.speed;
}

//
// MIXINS
//

// Replicate all the previous examples using
// plain objects and mixins

// 1
var vehicle = {
  driver: "John"
};

// 2
var car = {
  ...vehicle,
  speed: 0
};

// 3
var car = {
	...Vehicle,
	speed: 0,
	drive: function() {
		this.speed = 50;
	},
	stop: function() {
		this.speed = 0;
	},
	getSpeed: function() {
		return this.speed;
	}
}

//
// FUNCTIONAL MIXINS
//

// Replicate all the previous examples using
// plain objects and functional mixins

// 1
function Vehicle(target, driver) {
	return {
		...target,
		driver //driver: driver
	};
}

// 2
function Car(target, speed) {
	return {
		...target,
		speed // speed: speed
	};
}

// Copies the values of Vehicle to car, so creates a new object
var car = Car(Vehicle({}, "john"), 0);

// 3
function Car(target, speed) {
	return {
		...target,
		speed, // speed: speed
		drive: function() {
			this.speed = 50;
		},
		stop: function() {
			this.speed = 0;
		},
		getSpeed: function() {
			return this.speed;
		}
	};
}

// Copies the values of Vehicle to car, so creates a new object
var car = Car(Vehicle({}, "john"), 0);