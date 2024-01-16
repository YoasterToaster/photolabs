// Makes a deep copy of an object
export function deepCopy(obj) {
  // if object is null or not an object it returns the value as is
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = {};

  // Checks if the property is a direct value of the object and copies, if not it skips over it to avoid issues later on
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}