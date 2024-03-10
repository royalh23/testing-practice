import { capitalize, reverseString } from './code';

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
