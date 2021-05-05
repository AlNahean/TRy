// -- Made by --Nahean--
// http://fb.com/AlNahean19

var addShadow = document.querySelector(".eid-mk")

window.onload = function () {
   var stopTimer = setInterval(() => {
        load(stopTimer)
    }, 8000);
}

function load(stopTimer) {
  addShadow.classList.add("add-margin")
    console.log("nahean");
    clearInterval(stopTimer)
}


