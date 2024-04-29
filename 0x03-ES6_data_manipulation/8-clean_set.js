function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.map((item) => item.slice(startString.length)).join('-');
}

export default cleanSet;
