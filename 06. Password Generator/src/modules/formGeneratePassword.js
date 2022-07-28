import passwordGenerator from "./generator"

const generatedPassword = document.querySelector('.generated-password');
const passwordSize = document.querySelector('.pass-size');
const chkUpper = document.querySelector('.chk-upper');
const chkLower = document.querySelector('.chk-lower');
const chkNumber = document.querySelector('.chk-numbers');
const chkSymbols = document.querySelector('.chk-symbols');
const btnGenerate = document.querySelector('.btn-generate');

export default () => {
  btnGenerate.addEventListener('click', () => {
    const password = generate();
    generatedPassword.innerHTML = password; 
  });
}

function generate() {
  const password = passwordGenerator(
    passwordSize.value,
    chkUpper.checked,
    chkLower.checked,
    chkNumber.checked,
    chkSymbols.checked,
  );
  return password || 'Nada Selecionado';
}