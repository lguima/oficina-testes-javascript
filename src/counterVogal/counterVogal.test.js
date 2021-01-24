const counterVogal = require('./counterVogal')

describe('Counter Vogal Puzzle', () => {
  it('Should throw a TypeError if the parameter is number', () => {
    expect(() => {
      counterVogal(123);
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is array', () => {
    expect(() => {
      counterVogal([1, 2, 3]);
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is object', () => {
    expect(() => {
      counterVogal({ foo: 'bar' });
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is boolean', () => {
    expect(() => {
      counterVogal(true);
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is undefined', () => {
    expect(() => {
      counterVogal(undefined);
    }).toThrow(TypeError);
  });

  it('Should return 5 when it is passed "aeiou"', () => {
    const result = counterVogal('aeiou');
    expect(result).toEqual(5);
  });

  it('Should return 5 when it is passed "AEIOU"', () => {
    const result = counterVogal('AEIOU');
    expect(result).toEqual(5);
  });

  it('Should return 5 when it is passed "abcdefghijklmnopqrstuvwxyz"', () => {
    const result = counterVogal('abcdefghijklmnopqrstuvwxyz');
    expect(result).toEqual(5);
  });

  it('Should return 5 when it is passed "ABCDEFGHIJKLMNOPQRSTUVWXYZ"', () => {
    const result = counterVogal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    expect(result).toEqual(5);
  });

  it('Should return 0 when it is passed "bcdfghjklmnpqrstvwxyz"', () => {
    const result = counterVogal('bcdfghjklmnpqrstvwxyz');
    expect(result).toEqual(0);
  });

  it('Should return 0 when it is passed "BCDFGHJKLMNPQRSTVWXYZ"', () => {
    const result = counterVogal('BCDFGHJKLMNPQRSTVWXYZ');
    expect(result).toEqual(0);
  });

  it('Should return 5 when it is passed "a! e@ i# o$ u%"', () => {
    const result = counterVogal('a! e@ i# o$ u%');
    expect(result).toEqual(5);
  });

  it('Should return 5 when it is passed "A¨ E& I*, O. (U)?"', () => {
    const result = counterVogal('A¨ E& I*, O. (U)?');
    expect(result).toEqual(5);
  });

  it('Should return 19 when it is passed "Lorem ipsum dolor sit amet, consectetur adipiscing elit."', () => {
    const result = counterVogal('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    expect(result).toEqual(19);
  });

  it('Should return 22 when it is passed "Ut ut augue eu orci porta euismod nec vitae lorem."', () => {
    const result = counterVogal('Ut ut augue eu orci porta euismod nec vitae lorem.');
    expect(result).toEqual(22);
  });

  it('Should return 14 when it is passed "Generated 5 paragraphs, 415 words, 2747 bytes of Lorem Ipsum."', () => {
    const result = counterVogal('Generated 5 paragraphs, 415 words, 2747 bytes of Lorem Ipsum.');
    expect(result).toEqual(14);
  });
});
