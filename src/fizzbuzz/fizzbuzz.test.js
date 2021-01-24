const fizzbuzz = require('./fizzbuzz')

describe('Fizzbuzz Puzzle', () => {
  it('Should throw a TypeError if the parameter is string', () => {
    expect(() => {
      fizzbuzz("Lorem ipsum.");
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is array', () => {
    expect(() => {
      fizzbuzz([1, 2, 3]);
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is object', () => {
    expect(() => {
      fizzbuzz({ foo: 'bar' });
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is boolean', () => {
    expect(() => {
      fizzbuzz(true);
    }).toThrow(TypeError);
  });

  it('Should throw a TypeError if the parameter is undefined', () => {
    expect(() => {
      fizzbuzz(undefined);
    }).toThrow(TypeError);
  });

  it('Should return the number 0 when it is passed the number 0', () => {
    const result = fizzbuzz(0)
    expect(result).toEqual(0)
  })

  it('Should return the number 1 when it is passed the number 1', () => {
    const result = fizzbuzz(1)
    expect(result).toEqual(1)
  })

  it('Should return the number -1 when it is passed the number -1', () => {
    const result = fizzbuzz(-1)
    expect(result).toEqual(-1)
  })

  it('Should return "Fizz" when it is passed the number 3', () => {
    const result = fizzbuzz(3)
    expect(result).toEqual('Fizz')
  })

  it('Should return "Fizz" when it is passed the number -3', () => {
    const result = fizzbuzz(-3)
    expect(result).toEqual('Fizz')
  })

  it('Should return "Fizz" when it is passed the number 6', () => {
    const result = fizzbuzz(6)
    expect(result).toEqual('Fizz')
  })

  it('Should return "Fizz" when it is passed the number 12', () => {
    const result = fizzbuzz(12)
    expect(result).toEqual('Fizz')
  })

  it('Should return "Fizz" when it is passed the number 24', () => {
    const result = fizzbuzz(24)
    expect(result).toEqual('Fizz')
  })

  it('Should return "Buzz" when it is passed the number 5', () => {
    const result = fizzbuzz(5)
    expect(result).toEqual('Buzz')
  })

  it('Should return "Buzz" when it is passed the number -5', () => {
    const result = fizzbuzz(-5)
    expect(result).toEqual('Buzz')
  })

  it('Should return "Buzz" when it is passed the number 10', () => {
    const result = fizzbuzz(10)
    expect(result).toEqual('Buzz')
  })

  it('Should return "Buzz" when it is passed the number 20', () => {
    const result = fizzbuzz(20)
    expect(result).toEqual('Buzz')
  })

  it('Should return "Buzz" when it is passed the number 35', () => {
    const result = fizzbuzz(35)
    expect(result).toEqual('Buzz')
  })

  it('Should return "FizzBuzz" when it is passed the number 15', () => {
    const result = fizzbuzz(15)
    expect(result).toEqual('FizzBuzz')
  })

  it('Should return "FizzBuzz" when it is passed the number 30', () => {
    const result = fizzbuzz(30)
    expect(result).toEqual('FizzBuzz')
  })

  it('Should return "FizzBuzz" when it is passed the number 45', () => {
    const result = fizzbuzz(45)
    expect(result).toEqual('FizzBuzz')
  })
})
