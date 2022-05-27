/********************************************************* 
*                                         GLOBAL VARIABLES
*********************************************************/
let timer;
let isRunning = false;
let elapsedTime = 0;

/********************************************************* 
*                                      AUXILIARY FUNCTIONS
*********************************************************/ 
const getText = function(seconds) {
  actualDate = new Date(seconds * 1000);
  return actualDate.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const updateText = function(seconds) {
  const timerText = document.querySelector('.timer');
  timerText.innerHTML = getText(seconds);
}

const startTimer = function() {
  timer = setInterval(function() {  
    elapsedTime++;
    updateText(elapsedTime);
  }, 
  1000);

  // Remove red text
  const timerText = document.querySelector('.timer');
  timerText.classList.remove('isStopped');
};

const stopTimer = function () {
  // Stop interval counting  
  clearInterval(timer);

  // Add red text
  const timerText = document.querySelector('.timer');
  timerText.classList.add('isStopped');
}

const resetTimer = function () {
  elapsedTime = 0;

  // Remove red text
  const timerText = document.querySelector('.timer');
  timerText.innerHTML = '00:00:00';
  timerText.classList.remove('isStopped');
}

const addMark = function() {
  console.log('clicked');
  const divMarks = document.querySelector('.marks');
  const cntMarks = divMarks.childElementCount;

  // Create the element
  const p = document.createElement('p');
  p.innerHTML = `${cntMarks + 1}: ${getText(elapsedTime)}`;

  divMarks.appendChild(p);
}

const clearMarks = function() {
  const divMarks = document.querySelector('.marks');
  divMarks.innerHTML = '';
}

/********************************************************* 
*                                               MAIN EVENT
*********************************************************/ 

document.addEventListener('click', (e) => {
  
  if (e.target.classList.contains('start')) {
    if (!isRunning) {
      startTimer();
      isRunning = true;
    }
  };

  if (e.target.classList.contains('stop')) {
    if (isRunning){
      stopTimer();
      isRunning = false;
    }
  };

  if (e.target.classList.contains('reset')) {
    resetTimer();
    clearMarks();
  }

  if (e.target.classList.contains('mark')) {
    addMark();
  }

});