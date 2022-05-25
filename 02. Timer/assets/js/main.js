/********************************************************* 
*                                         GLOBAL VARIABLES
*********************************************************/
let timer;
let isRunning = false;
let elapsedTime = 0;

/********************************************************* 
*                                      AUXILIARY FUNCTIONS
*********************************************************/ 
const updateText = function(seconds) {
  actualDate = new Date(seconds * 1000);

  const timerText = document.querySelector('.timer');
  timerText.innerHTML = actualDate.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

const startTimer = function() {
  timer = setInterval(function() {  
    elapsedTime++;
    updateText(elapsedTime);
    console.log(elapsedTime);
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
  }



});