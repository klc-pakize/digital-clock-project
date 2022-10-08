let second = document.getElementById("second");
let hourse = document.getElementById("hourse");
let minute = document.getElementById("minute");
let ampm = document.getElementById("ampm");
// let cup = document.getElementsByClassName("cup");

let day = document.getElementById("day");

let dateDay = new Date();
let dayDate = dateDay.getDay();
console.log(dayDate);

if (dayDate == 0) {
  day.innerHTML = "Sunday";
}
if (dayDate == 1) {
  day.innerHTML = "Monday";
}
if (dayDate == 2) {
  day.innerHTML = "Tuesday";
}
if (dayDate == 3) {
  day.innerHTML = "Tednesday";
}
if (dayDate == 4) {
  day.innerHTML = "Thursday";
}
if (dayDate == 5) {
  day.innerHTML = "Friday";
}
if (dayDate == 6) {
  day.innerHTML = "Saturday";
}

let a = setInterval(() => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
    if (period === "PM") {
      day.style["color"] = "rgb(255, 238, 2)";
      minute.style["color"] = " rgb(255, 0, 0)";
      hourse.style["color"] = " rgb(255, 0, 0)";
      second.style["color"] = " rgb(255, 0, 0)";
      ampm.style["color"] = " rgb(255, 0, 0)";
    }
  }

  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  hourse.innerHTML = hrs;
  minute.innerHTML = mins;
  second.innerHTML = secs;
  ampm.innerHTML = period;
}, 1000);

console.log(a);
