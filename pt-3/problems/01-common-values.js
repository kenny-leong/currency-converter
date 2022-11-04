/*
    Common values in two objects:
        Given two objects, return an array of values that are present in both objects

    const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
    const bunny = {color: 'white', favoriteFood: 'carrots'};
    const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
    const vehicle = { wheels: 4, color: 'red'};

    console.log(commonValues(cat, bunny)); // prints ['white']
    console.log(commonValues(cat, human)); // prints [4, 'sushi']
    console.log(commonValues(human, vehicle)); // prints [4]

*/

const unique = (array) => {
  let arr1 = [];
  let dupe = [];
  for (i=0;i<array.length;i++) {
    if (arr1.includes(array[i])) {
      dupe.push(array[i])
    } else {
      arr1.push(array[i])
    }
  }
  return dupe;
}

function commonValues(obj1, obj2) {
  let values = Object.values(obj1);
  values = values.concat(Object.values(obj2))
  return unique(values);
}



const cat = {color: 'white', legs: 4, favoriteFood: 'sushi'};
const bunny = {color: 'white', favoriteFood: 'carrots'};
const human = {hobbies: ['running', 'painting'], legs: 4, favoriteFood: 'sushi'};
const vehicle = { wheels: 4, color: 'red'};
console.log(commonValues(cat, bunny)); // prints ['white']
console.log(commonValues(cat, human)); // prints [4, 'sushi']
console.log(commonValues(human, vehicle)); // prints [4]




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = commonValues;
} catch (e) {
    module.exports = null;
}
