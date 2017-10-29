var recipes = {};

function updateObjectWithKeyAndValue (obj, key, val) {
  return obj
  return Object.assign ({}, obj, { [key]: val
  })
};

function destructivelyUpdateObjectWithKeyAndValue (obj, key, val) {
  obj[key] = val
  return obj
}

function deleteFromObjectByKey (obj, key) {
  var temp = obj
  delete temp[key]
  return temp
}
