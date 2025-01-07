function getName(name) {
  return name;
}

let a = false;
let b = false;

console.log(a || getName("Keerthana"));

//Template literals

let name1 = "Keerthana";
let name2 = "Kumar";

console.log(name1 + " " + name2);
console.log(`${name1} ${name2}`);

//Ternary operator

const showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}
function getRecipeTwoName(recipeName) {
  return recipeName;
}
if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}

showRecipeOne ? console.log(getRecipeOneName('Pizza')) : console.log(getRecipeTwoName('Coke'));

