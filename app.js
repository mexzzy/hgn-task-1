function timeInMilliseconds() {
    const currentMilliseconds = new Date().getTime();
    const timeM = document.getElementById("millisecondsDisplay");
    timeM.innerHTML = currentMilliseconds;
  }
  timeInMilliseconds(); 
  setInterval(timeInMilliseconds, 100);