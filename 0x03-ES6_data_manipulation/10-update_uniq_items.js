export default function updateUniqueItems(listItem) {
  if (!(listItem instanceof Map)) {
    throw new Error('Cannot process');
  }
  listItem.forEach((value, key) => {
    if (value === 1) {
      listItem.set(key, 100);
    }
  });
  return listItem;
}
