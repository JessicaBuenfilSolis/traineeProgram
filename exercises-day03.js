/*function Vehicle(driver) {
  this.driver = driver;
}

var vehicle = new Vehicle("Jess");
//console.log(vehicle); //Vehicle { driver: 'Jess' }

//----------------------------------------
function Car(driver) {
  Vehicle.call(this, driver);
  this.speed = 0;
}

var teslas = new Car("Vane");
//console.log(teslas); // Car { driver: 'Vane', speed: 0 }

//----------------------------------------
Car.prototype.stop = function() {
  this.speed = 0;
};

Car.prototype.drive = function() {
  this.speed = 50;
};

Car.prototype.getSpeed = function() {
  return this.speed;
};

teslas.drive.apply(teslas);
console.log(teslas.getSpeed());
teslas.stop.apply(teslas);
console.log(teslas.getSpeed());*/

//----------------------------------------
/*class Vehicle {
  constructor(driver) {
    this.driver = driver;
  }
}

var vehicle = new Vehicle("driver");*/
//console.log(vehicle);
//----------------------------------------
/*class Car extends Vehicle {
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

  getSpeed() {
    return this.speed;
  }
}
var teslas = new Car("other driver");
teslas.drive(teslas);
console.log(teslas.getSpeed());
teslas.stop.apply(teslas);
console.log(teslas.getSpeed());

console.log(teslas);*/

//----------------- SET PROTOTYPE OF -----------------------
/*var vehicle = {
  driver: "Mary"
};

var car = {
  speed: 0,
  drive() {
    this.speed = 50;
  },
  stop() {
    this.speed = 0;
  },
  getSpeed() {
    return this.speed;
  }
};

Object.setPrototypeOf(car, vehicle);
car.drive();
console.log(car.getSpeed());
car.stop();
console.log(car.getSpeed());

console.log(Object.getPrototypeOf(car));*/

//------------------ OBJECT CREATE ----------------------

var vehicle = {
  driver: "Mary"
};

var car = Object.create(vehicle);
car.speed = 0;
car.drive = function() {
  this.speed = 50;
};
car.stop = function() {
  this.speed = 0;
};
car.getSpeed = function() {
  return this.speed;
};

/*console.log(car);
car.drive();
console.log(car.getSpeed());
car.stop();
console.log(car.getSpeed());*/

//----------------------------------------
var vehicle2 = {
  driver: "Rubi"
};

//var car2 = Object.assign({ speed: 0 }, vehicle2);

var car2 = {
  ...vehicle2,
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

//----------------------------------------
function asVehicle(target, driver) {
  return {
    ...target,
    driver
  };
}

function asCar(target, speed) {
  return {
    ...target,
    speed,
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

var vehicle3 = asVehicle({}, "Isra");
var car3 = asCar(vehicle3, 0);

console.log(car3);
car3.drive();
console.log(car3.getSpeed());
car3.stop();
console.log(car3.getSpeed());
//----------------------------------------
