// // If statements

// const id = 100;

// // // Equal To
// // if (id == 100) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// // // Not Equal To
// // if (id != 101) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }


// // // EQUAL TO VALUE AND TYPE
// // if (id === 100) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// // // EQUAL TO VALUE AND TYPE
// // if (id !== 100) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }


// // Test to see if something is undefined, test the type
// if (typeof id !== 'undefined') {
//   console.log(`the ID is ${id}`)
// } else {
//   console.log('No id');
// }

// // GREATER THAN OR LESS THAN
// if (id > 200) {
//   console.log(true);
// } else {
//   console.log(false + " ID IS LESS THAN 200");

//   // IF ELSE

//   const color = 'green';

//   if (color === 'green') {
//     console.log('Color is green');
//   } else if (color === 'blue') {
//     console.log('Color is blue');
//   } else {
//     console.log('Color is not found');
//   }
// }

// // LOGICAL OPERATORS

// const name = "Steven A.";
// const age = 15;

// if (age > 0 && age < 13) {
//   console.log(`${name} is a child`);
// } else if (age >= 18 && age <= 30) {
//   console.log(`${name} is an adult`)
// }


// // OR ||

// if (age < 16 || age > 65) {
//   console.log(`${name} is too old to participate.`)
// } else {
//   console.log(`${name} is registered to participate.`);
// }


// // TERNARY OPERATOR 
// // ? means output : means else 
// console.log(id === 100 ? 'correct' : 'incorrect')

// // WITHOUT BRACES

// if (id === 100)
//   console.log('correct');
// else
//   console.log('incorrect');


// SWITCHES

const color = 'red';

switch (color) {
  case 'red':
    console.log("Color is red")
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is neither red or blue');
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}

console.log(`Today is ${day}`);