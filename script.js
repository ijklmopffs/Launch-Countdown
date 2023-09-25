const daysTime = document.querySelector(".days span");
const hoursTime = document.querySelector(".hours span");
const minutesTime = document.querySelector(".minutes span");
const secondsTime = document.querySelector(".seconds span");
const h1 = document.querySelector("h1");
const countDownDate = new Date("Sep 25, 2024 11:22:59").getTime();

const x = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysTime.textContent = days;
  hoursTime.textContent = hours;
  minutesTime.textContent = minutes;
  secondsTime.textContent = seconds;

  if (distance < 0) {
    h1.textContent("launched");
  }
}, 1000);
