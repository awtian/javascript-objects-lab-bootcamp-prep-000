var recipes = {};

function updateObjectWithKeyAndValue (obj, key, val) {
  return obj
  return Object.assign({}, object, key, val);
};

function destructivelyupdateObjectWithKeyAndValue (obj, key, val) {
  obj[key] = val
  return obj
}
