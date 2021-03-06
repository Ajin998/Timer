var root = document.querySelector(".screen");
var start_stop = document.querySelector("#startstop");
var redo = document.querySelector("#reset");
var [hours,minutes,seconds] = [0,0,0];
// For capturing current status of the user
var interval = null; // Do nothing unless user presses start button
var status = "stopped";
// for displaing trailing zero...
var [d_hours,d_minutes,d_seconds] =[0,0,0];

const printTime = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  } //
  seconds < 10 ? (d_seconds = "0" + seconds.toString()) : (d_seconds = seconds);
  minutes < 10 ? (d_minutes = "0" + minutes.toString()) : (d_minutes = minutes);
  hours < 10 ? (d_hours = "0" + hours.toString()) : (d_hours = hours);

  root.innerHTML = d_hours + ":" + d_minutes + ":" + d_seconds;
};

const startStop = () => {
  if (status === "stopped") {
    interval = window.setInterval(printTime, 1000);
    start_stop.innerHTML = '<i class="fas fa-pause"></i>' + " Pause";
    status = "started";
  } else {
    window.clearInterval(interval);
    start_stop.innerHTML = '<i class="fas fa-play"></i>' + " Start";
    status = "stopped";
  }
};

const reset =()=>{
  window.clearInterval(interval);
  [hours,minutes,seconds]=[0,0,0];
  root.innerHTML = '00:00:00';
  start_stop.innerHTML = '<i class="fas fa-play"></i>' + " Start";
}

start_stop.addEventListener("click", startStop);
redo.addEventListener("click",reset);
