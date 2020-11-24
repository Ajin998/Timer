var root = document.querySelector(".screen");
// console.log(hours, minutes, seconds);
var start_stop = document.querySelector("#startstop");
var hours = 0;
var minutes = 0;
var seconds = 0;
// For capturing current status of the user
var interval = null; // Do nothing unless user presses start button
var status = "stopped";
// for displaing trailing zero...
let d_seconds = 0;
let d_minutes = 0;
let d_hours = 0;

const printTime = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    d_seconds = "0" + seconds.toString();
  } else {
    d_seconds = seconds;
  }
  if (minutes < 10) {
    d_minutes = "0" + minutes.toString();
  } else {
    d_minutes = minutes;
  }
  if (hours < 10) {
    d_hours = "0" + hours.toString();
  } else {
    d_hours = hours;
  }
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

start_stop.addEventListener("click", startStop);
