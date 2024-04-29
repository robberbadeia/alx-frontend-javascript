function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join(' - ');
}

export default cleanSet;
