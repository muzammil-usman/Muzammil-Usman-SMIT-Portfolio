function currentTime() {
  var date = new Date();
  var hours = date.getHours();
  var mins = date.getMinutes();
  var secs = date.getSeconds();
  var am_or_pm = document.getElementById("am-pm");

  if (hours > 12) {
    am_or_pm.innerText = "PM";
  } else {
    am_or_pm.innerText = "AM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }

  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = mins;
  document.getElementById("secs").innerText = secs;
}

setInterval(currentTime, 1000);
