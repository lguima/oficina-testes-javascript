function fizzbuzz(number) {
  if (typeof number !== 'number') {
    throw new TypeError;
  }

  const divisibleBy3 = number % 3 === 0;
  const divisibleBy5 = number % 5 === 0;

  if (number === 0 || (!divisibleBy3 && !divisibleBy5)) {
    return number
  }
  else if (divisibleBy3 && !divisibleBy5) {
    return 'Fizz';
  }
  else if (divisibleBy5 && !divisibleBy3) {
    return 'Buzz';
  }
  else {
    return 'FizzBuzz';
  }
}

module.exports = fizzbuzz
