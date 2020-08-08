// window.console.log('template');
// or 
console.log('template testing2 Quotee');



// udemy course - I am jumping around
// https://www.udemy.com/course/javascript-the-basics-for-beginners/learn/lecture/5973280#overview

// object constructor function
// build more than one instance of an object vs object literals
// capitalize first letter of function constructor name for convention
// this keyword refers to the instance of the object

// function Animal(name, foodType, kingOfJungle) {
//   this.name = name;
//   this.foodType = foodType;
//   this.kingOfJungle = kingOfJungle;
// }

// let animal1 = new Animal('Snoopy', 'carnivore', false);
// let animal2 = new Animal('Garfield', 'lasagne', true);
// let animal3 = new Animal('Tweetie Bird', 'herbivore', false);

// [animal1, animal2, animal3].forEach(function(elem) {
//   console.log(elem);
// })


// take object sort keys alphabetically and log to console in order
let orderObjKeys = function (obj) {
  let keys = Object.keys(obj);
  keys.sort();
  let citystate = [];

  keys.forEach(function(elem, indx) {
    // console.log(elem, indx);
    if (elem === 'city') {
      keys.splice(indx, 1);
      citystate.push('city');
    }
    if (elem === 'state') {
      keys.splice(indx, 1);
      citystate.push('state');
    }
  });
  if (citystate.length != 0) {
    keys = keys.concat(citystate);
  }

  return keys;
};


// lab sect04 lesson 23
// using object literal
let home1 = {
  rooms: 4,
  apartment: false, 
  color: 'brown',
  swimmingPool: true, 
  city: 'Seattle',
  state: 'WA'
};

let home2 = {
  rooms: 2,
  apartment: true,
  color: 'white',
  swimmingPool: false,
  city: 'Sacramento',
  state: 'CA'
};

// now use object constructor funtion to build home objects

function Home(rooms, apartment, color, swimmingPool, city, state) {
  this.rooms = rooms;
  this.apartment = apartment;
  this.color = color;
  this.swimmingPool = swimmingPool;
  this.city = city;
  this.state = state;
}

let home3 = new Home(3, false, 'blue', true, 'Minnie', 'MN');
let home4 = new Home(1, true, 'pink', true, 'Atlanta', 'GA');
let home5 = new Home(5, false, 'blue', true, 'New York', 'NY');

let homes = [home1, home2, home3, home4, home5];

homes.forEach(function(elem) {
  let keys = orderObjKeys(elem);
  console.log('\n');
  keys.forEach(function(keyVal) {
    console.log(`${keyVal}: ${elem[keyVal]}`);
  })
});



