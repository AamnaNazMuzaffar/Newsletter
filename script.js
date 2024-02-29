"use strcik";

const but = document.querySelector(".but");
const butt = document.querySelector(".butt");
const input = document.querySelector(".input");
const div = document.querySelector(".div");
const div2 = document.querySelector(".div2");

input.addEventListener("input", function () {
  but.addEventListener("click", function () {
    if (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/.test(input.value)) {
      input.style.backgroundColor = "white";
      div.style.display = "none";
      div2.style.display = "flex";
    } else {
      input.style.backgroundColor = "pink";
    }
  });
});
input.addEventListener("click", function () {
  input.style.backgroundColor = "white";
});
butt.addEventListener("click", function () {
  div.style.display = "flex";
  div2.style.display = "none";
input.value="";
});


document.write("amna")