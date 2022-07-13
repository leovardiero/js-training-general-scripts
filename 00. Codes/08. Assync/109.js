// METODOS UTEIS PARA PROMISSES

// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
};

function newWait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject('BAD VALUE');
      return;
    }

    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promise');
    }, time);
  });
}


const promises = [
  // 'Primeiro Valor',
  newWait('Primese 1', random(1000, 5000)),
  newWait('Promise 2', random(1000, 5000)),
  newWait('Promise 3', random(1000, 5000)),
  // newWait(5000, 1000),
  // 'Final Value'
];

/*
Promise.all(promises)
  .then(function(value) {
    console.log(value)
  })
  .catch(function(error) {
    console.log(error)
  });
*/
 
/*
Promise.race(promises)
  .then(function (value) {
    console.log(value)
  })
  .catch(function (error) {
    console.log(error)
  });
*/

function downloadPage() {
  const cached = true;

  if(cached) {
    return Promise.reject('Página em cache')
  } else {
    return newWait('Baixando Página', random(500, 1000))
  }
}

downloadPage()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('Error:', e));