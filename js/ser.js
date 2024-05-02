let erasier = document.querySelector(".ear");
let input = document.querySelector("input");
let red = document.querySelector(".red");
let aqua = document.querySelector(".aqua");
let green = document.querySelector(".green");
let pink = document.querySelector(".pink");
let purple = document.querySelector(".purple");
let lightblue = document.querySelector(".lightblue");
let black = document.querySelector(".white");
let orgDiv = document.querySelector(".row");
let add = document.querySelector(".add");
let eror = document.querySelector("p");
let jk = document.querySelector(".jk");
let kl = document.querySelector(".kl");
let spinner = document.querySelector(".mm");
let colorKO = document.querySelectorAll(".colorKO");
let op;
erasier.addEventListener("click", function () {
  input.value = "";
});
eror.style.display = "none";
let ui = colorKO.forEach(function (h) {
  h.addEventListener("click", function (event) {
    let inputCol = event.target.style.backgroundColor;
     op = (input.style.backgroundColor = inputCol);
    return op
   
  });
});
input.addEventListener("keydown", function (event) {
  if (event.code == "Enter") {
    if (input.value == "") {
      eror.innerHTML = "Please enter";
      eror.style.display = "block";
    } else {
      let div2 = document.createElement("div");
      let span = document.createElement("span");
      let divInner = document.createElement("div");

      divInner.classList.add("shadow-lg", "p-3", "rounded-3");
      div2.classList.add("col");
      span.classList.add("text-black");

      span.innerHTML = input.value;
      div2.append(span);
      div2.style.cursor = "pointer";
      divInner.setAttribute('style','background-color:'+op)
      div2.append(divInner);
      orgDiv.append(div2);
      divInner.append(span);
      eror.style.display = "none";
      input.value = "";
      div2.addEventListener("click", function () {
        div2.remove();
      });
     
    }
  }
});
add.addEventListener("click", function () {
  if (input.value == "") {
    eror.innerHTML = "Please enter";
    eror.style.display = "block";
  } else {
    eror.style.display = "none";
    let div2 = document.createElement("div");
    let span = document.createElement("span");
    let divInner = document.createElement("div");
    divInner.classList.add("shadow-lg", "p-3", "rounded-3");
    div2.classList.add("col");
    span.classList.add("text-black");
    span.innerHTML = input.value;
    div2.append(span);
    divInner.setAttribute('style','background-color:'+op)
    div2.style.cursor = "pointer";
    div2.append(divInner);
    orgDiv.append(div2);
    divInner.append(span);
    input.value = "";
    div2.addEventListener("click", function () {
      div2.remove();
    });
  }
});
window.addEventListener("load", function () {
  spinner.classList.add("d-none");
});
