function add(a, b) {
  return a+b;
}

console.log(add(3,4));

var toAdd = [1,2];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vik'];
var groupAB = [...groupA, 3, ...groupB];

console.log(groupAB);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew'];

final = [...final, ...names];
final.forEach((name)=>{
  console.log('Hi ' + name);
});
