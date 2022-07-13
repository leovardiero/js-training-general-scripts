// Async Await

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
};

function newWait(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

// BEFORE
/*
newWait('Fase 1', random(100, 1000))
  .then(value => {
    console.log(value);
    return newWait('Fase 2', random(100, 1000));
  })
  .then(value => { 
    console.log(value);
    return newWait('Fase 3', random(100, 1000));
  })
  .then(value => {
    console.log(value)
  })
  .catch(e => console.log('ERROR:', e));
*/

// AFTER
async function exec() {
  try {
    const fase1 = await newWait('Fase 1', random(100, 1000));
    console.log(fase1)
    const fase2 = await newWait(500, random(100, 1000));
    console.log(fase2)
    const fase3 = await newWait('Fase 3', random(100, 1000));
    console.log(fase3)
    console.log('Terminamos na', fase3)
  }
  catch(e) {
    console.log(e)
  }
}

exec()