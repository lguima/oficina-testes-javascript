const counterVogal = (text) => {
  if (typeof text !== 'string') {
    throw new TypeError;
  }

  const letters = text.replace(/[^a-zA-Z]/, '');
  const occurrences = (letters.match(/[aeiou]/gi) || []).length;

  return occurrences;
}

module.exports = counterVogal;
