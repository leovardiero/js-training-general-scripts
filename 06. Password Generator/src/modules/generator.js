const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getUpper = () => String.fromCharCode(random(65, 91));
const getLower = () => String.fromCharCode(random(97, 123));
const getNumber = () => String.fromCharCode(random(48, 58));
const symbols = ',.~^[]{}!@#$%*()_+-=';
const getSymbol = () => symbols[random(0, symbols.length)];

export default function generatePassword(size, hasUpper, hasLower, hasNumber, hasSymbol) {
  const stringArray = []
  size = Number(size)

  for(let i = 0; i < size; i++) {
    hasUpper && stringArray.push(getUpper());
    hasLower && stringArray.push(getLower());
    hasNumber && stringArray.push(getNumber());
    hasSymbol && stringArray.push(getSymbol());
  }

  return stringArray.join('').slice(0, size)
}