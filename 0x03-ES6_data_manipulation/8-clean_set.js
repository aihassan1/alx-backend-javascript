export default function cleanSet(set, startString) {
  const strings = [];

  // check if the start string is empty -> return
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }

  // iterate over each ele in the set
  set.forEach((string) => {
    if (typeof string === 'string' && string.startsWith(startString)) {
      strings.push(string.slice(startString.length));
    }
  });
  return strings.join('-');
}
