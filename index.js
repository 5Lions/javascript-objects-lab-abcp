var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

updateObjectWithKeyAndValue(recipes, "prop", 1);
console.log(recipes);

var recipes = {}

function destructivelyUpateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  console.log()
}