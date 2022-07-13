function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
};

// OLD - CALLBACK HELL
function wait(msg, time, cb) {
  setTimeout(() => {
    console.log(msg)
    if (cb) cb();
  }, time);
};

/*
wait('frase 1', random(1000, 5000), function() {
  wait('frase 2', random(1000, 5000), function() {
    wait('frase 3', random(1000, 5000), function() {
      wait('frase 4', random(1000, 5000));
    });
  });
});
*/

// PROMISES
function newWait(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');

    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

newWait('frase1', random(500, 1500))
  .then(resposta => {
    console.log(resposta);
    return newWait('frase2', random(500, 1500));
  })
  .then(resposta => {
    console.log(resposta);
    return newWait(23, random(500, 1500));
  })
  .then(resposta => {
    console.log(resposta);
  })
  .catch((e) => {
    console.log('ERROR', e)
  });
