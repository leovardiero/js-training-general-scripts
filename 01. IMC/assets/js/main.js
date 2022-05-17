/* Auxiliary functions */

const getIMC = function(peso, altura) {
  return Number((peso / (altura **2)).toFixed(2));
};

Number.prototype.between = function(a, b, inclusive) {
  var min = Math.min(a, b),
    max = Math.max(a, b);

  return inclusive ? this >= min && this <= max : this > min && this < max;
}

const getText = function(imc) {
  const imcResult = [
    'Sub', 
    'Peso Normal',
    'Sobrepeso',
    'Obesidade Grau I',
    'Obesidade Grau II',
    'Obesidade Grau III'
  ];

  if(imc.between(0, 18.5,true)) {
    return imcResult[0];
  } else if (imc.between(18.5, 25, true)) {
    return imcResult[1];
  } else if (imc.between(25, 30, true)) {
    return imcResult[2];
  } else if (imc.between(30, 35, true)) {
    return imcResult[3];
  } else if (imc.between(35, 40, true)) {
    return imcResult[4];
  } else if (imc.between(45, 1000, true)) {
    return imcResult[5];
  };
};

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
  const imcText = getText(imc);

  console.log(`${peso} | ${altura} | ${imc} | ${imcText}`);

})