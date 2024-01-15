export function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}
// Retrieve Photo Details
export const retrievePhotoDetails = (modalPhotoDetails) => {

  const updatedPhotoDetails = deepCopy(modalPhotoDetails);

  return updatedPhotoDetails;
};