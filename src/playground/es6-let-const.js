var nameVar = 'Andrew'
var nameVar = 'mike';
console.log('nameVar', nameVar)

let nameLet = 'Jen'
nameLet = 'duc anh'
console.log('nameLet', nameLet)

const nameConst = 'Frank'
console.log('nameConst', nameConst);

// Block scoping 

var fullName = 'Andrew Mead';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);

