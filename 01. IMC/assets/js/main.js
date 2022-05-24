/* Auxiliary functions */

// Calculates IMC and return as a Number
const getIMC = function(peso, altura) {
  return Number((peso / (altura **2)).toFixed(2));
};

// Given an IMC returns its message and level
const getText = function(imc) {
  const imcResult = [
    'Abaixo do Peso', 
    'Peso Normal',
    'Sobrepeso',
    'Obesidade Grau I',
    'Obesidade Grau II',
    'Obesidade Grau III'
  ];

  if(imc.between(0, 18.5,true)) {
    return [2, imcResult[0]];
  } else if (imc.between(18.5, 25, true)) {
    return [1, imcResult[1]];
  } else if (imc.between(25, 30, true)) {
    return [2, imcResult[2]];
  } else if (imc.between(30, 35, true)) {
    return [3, imcResult[3]];
  } else if (imc.between(35, 40, true)) {
    return [3, imcResult[4]];
  } else if (imc.between(45, 1000, true)) {
    return [3, imcResult[5]];
  };
};

// Clear the div
const clearResult = function() {
  const div = document.querySelector('.imcText');
  div.innerHTML = '';
}

// Updates the IMC text
const updateImcText = function(imc, imcTuple) {
  const p = document.createElement('p');
  const msg = `IMC: ${imc} | ${imcTuple[1]}`;
  p.innerHTML = msg;

  switch(imcTuple[0]) {
    case 1: 
      p.classList.add('isOk');
      break;
    case 2:
      p.classList.add('isWarning');
      break;
    case 3:
      p.classList.add('isDanger');
      break;
    default:
      p.classList.add('isMessage');
      break;
  }

  const div = document.querySelector('.imcText');
  clearResult();

  // console.log(p)
  div.appendChild(p)
}

// Prototype for make easier calculate "between" two values
Number.prototype.between = function(a, b, inclusive) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return inclusive ? this >= min && this <= max : this > min && this < max;
}

/* Button interruption */
document.addEventListener('click', (e) => {
  // if it was not clicked on button, return
  if (!e.target.classList.contains('submit')) {
    return;
  }

  // Get Raw Values
  const rawAltura = document.querySelector('#altura').value;
  const rawPeso = document.querySelector("#peso").value;

  let peso = Number(rawPeso.replace(',', '.'));
  
  let altura = Number(rawAltura.replace(',', '.'));
  altura = altura > 3 ? altura / 100 : altura;

  if(!peso || peso === 0) {
    alert("Insira um peso válido!");
    return;
  }

  if(!altura || altura === 0) {
    alert("Insira uma altura válida!");
    return;
  }

  const imc = getIMC(peso, altura);
  const imcTuple = getText(imc);

  updateImcText(imc, imcTuple);
})