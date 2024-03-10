import { capitalize } from './code';

describe('capitalize', () => {
  test('Returns string with first char capitalized', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });

  test('Returns string with first char capitalized regardless of other letters', () => {
    expect(capitalize('bOOK')).toEqual('BOOK');
  });
});
