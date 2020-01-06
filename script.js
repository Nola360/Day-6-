// FUNCTION DECLARATION

function greet(firstName = 'Stan', lastName = 'Smith') {

  // console.log('hello');
  return 'hello ' + firstName + ' ' + lastName;
}
// console.log(greet('stan', 'smith'));
console.log(greet());

// FUNCTION EXPRESSIONS

// Anonymusous function
const square = function (x = 3) {
  return x * x
}

// console.log(square(8));
console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSION - IIFE'S

(function () {
  let statement = "I like IIFE's"
  console.log('This is a IIFE ' + statement);
})();

// IIFE with parameter
(function (name) {
  let statement = "I like IIFE's"
  console.log('This is a IIFE ' + name);
})('Timmy');

// FUNCTION INSIDE OBJECTS (METHOD)

const todo = {
  add: function () {
    console.log('add todo...')
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function () {
  console.log('Delete todos...');
}

todo.add();
todo.edit(33);
todo.delete();