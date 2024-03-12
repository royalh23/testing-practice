function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  return { add, subtract, multiply, divide };
})();

function caesarCipher(str, shift) {
  const alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return str
    .split('')
    .map((letter) => {
      const index = (alph.indexOf(letter.toLowerCase()) + shift) % 26;
      if (
        ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_']
          .concat(['+', '=', '{', '[', '}', ']', '|', ';', ':', '"', "'", '<'])
          .concat([',', '>', '.', '?', '/', ' '])
          .includes(letter)
      )
        return letter;
      if (letter === letter.toUpperCase()) return alph[index].toUpperCase();
      return alph[index];
    })
    .join('');
}

export { capitalize, reverseString, calculator, caesarCipher };
