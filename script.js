var countDownDate = new Date("Dec 16, 2019 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
  document.getElementById("days1").innerHTML = Math.floor(days/10)
  document.getElementById("days2").innerHTML = days%10

  document.getElementById("hours1").innerHTML = Math.floor(hours/10)
  document.getElementById("hours2").innerHTML = hours%10

  document.getElementById("minutes1").innerHTML = Math.floor(minutes/10)
  document.getElementById("minutes2").innerHTML = minutes%10
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var pcountDownDate = new Date("Dec 14, 2019 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = pcountDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
  document.getElementById("p-days1").innerHTML = Math.floor(days/10)
  document.getElementById("p-days2").innerHTML = days%10

  document.getElementById("p-hours1").innerHTML = Math.floor(hours/10)
  document.getElementById("p-hours2").innerHTML = hours%10

  document.getElementById("p-minutes1").innerHTML = Math.floor(minutes/10)
  document.getElementById("p-minutes2").innerHTML = minutes%10
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("p-demo").innerHTML = "EXPIRED";
  }
}, 1000);

const openMenu = document.getElementById("open-menu"),
      closeMenu = document.getElementById("close-button"),
      menu = document.getElementsByClassName("menu-mobile")[0],
      navContainer = document.getElementById("mobile-nav-container");

openMenu.addEventListener("click", (e) => {
  menu.classList.add("opened");
});

closeMenu.addEventListener("click", (e) => {
  menu.classList.remove("opened");
});

navContainer.addEventListener("click", (e) => {
  menu.classList.remove("opened");
});