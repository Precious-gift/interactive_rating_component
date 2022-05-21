const submit = document.querySelector(".button");
let currentRating = document.querySelector("#current_rating");

function change(ev) {
  var i;
  var circle = document.getElementsByClassName("circle");
  for (i = 0; i < circle.length; i++) {
    circle[i].className = circle[i].className.replace(" marked", "");
  }
  ev.currentTarget.className += " marked";
  for (i = 0; i < circle.length; i++) {
    if (circle[i].classList.contains("marked")) {
      currentRating.innerHTML = i + 1;
      console.log(i + 1);
    }
  }
}

submit.onclick = function () {
  var secondMain = document.querySelector(".secondMain");
  var main = document.querySelector(".main");
  secondMain.style.display = "block";
  main.style.display = "none";
};
