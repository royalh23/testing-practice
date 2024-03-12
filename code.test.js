import { capitalize, reverseString, calculator, caesarCipher } from './code';

describe('capitalize', () => {
  test('Returns string with first char capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });

  test('Returns string with first char capitalized regardless of other letters', () => {
    expect(capitalize('bOOK')).toEqual('BOOK');
  });
});

describe('reverseString', () => {
  test('Reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test('Reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test('Works with punctuation', () => {
    expect(reverseString('hell!o ? the<r>e')).toEqual('e>r<eht ? o!lleh');
  });
});

describe('calculator', () => {
  test('Adds small numbers', () => {
    expect(calculator.add(2, 1)).toEqual(3);
  });

  test('Adds large numbers', () => {
    expect(calculator.add(1095, 2036)).toEqual(3131);
  });

  test('Subtracts small numbers', () => {
    expect(calculator.subtract(2, 1)).toEqual(1);
  });

  test('Subtracts large numbers', () => {
    expect(calculator.subtract(2365, 4523)).toEqual(-2158);
  });

  test('Multiplies small numbers', () => {
    expect(calculator.multiply(2, 3)).toEqual(6);
  });

  test('Multiplies large numbers', () => {
    expect(calculator.multiply(2365, 4523)).toEqual(10696895);
  });

  test('Divides small numbers', () => {
    expect(calculator.divide(6, 2)).toEqual(3);
  });

  test('Divides large numbers', () => {
    expect(calculator.divide(1000, 250)).toEqual(4);
  });
});

describe('caesarCipher', () => {
  test('Encrypts with a shift factor of 1', () => {
    expect(caesarCipher('hello', 1)).toEqual('ifmmp');
  });

  test('Encrypts with a shift factor of 3', () => {
    expect(caesarCipher('hello', 3)).toEqual('khoor');
  });

  test('Wraps from "z" to "a"', () => {
    expect(caesarCipher('xyz', 1)).toEqual('yza');
  });

  test('Wraps from "z" to "a" with a greater shift factor', () => {
    expect(caesarCipher('zxcvufik', 69)).toEqual('qotmlwzb');
  });

  test('Keeps the same case for each character', () => {
    expect(caesarCipher('hElLo', 5)).toEqual('mJqQt');
  });

  test('Ignores punctuation', () => {
    expect(caesarCipher('h!el? l<o>', 5)).toEqual('m!jq? q<t>');
  });
});
