// -- Made by --Nahean--
// http://fb.com/AlNahean19

var body = document.querySelector(".body")
var star = document.querySelectorAll(".star")
var button = document.querySelector(".button")
var svgContainer = document.querySelector(".eid-mk")
var trigger_div = document.querySelector(".svg-trigger")

var num = 0
var fireContainer = document.querySelector(".to-center-firework");


var popControl = document.querySelector(".pop-control")
var popUp = document.querySelector(".pop-up")
var fbLink = document.querySelector(".fblink")

popUp.addEventListener("click", showFbLink)

window.addEventListener("scroll", ChangeOpacity)

function ChangeOpacity() {
  var total = window.screen.availHeight
  var math = (total/220000)* scrollY
  // console.log(math);
  star.forEach((sta) =>{
    sta.style.opacity = ''+math+''
    //console.log(innerHeight)
    var bottomScrollHeight = scrollY + innerHeight
    var triggerTopHeight = trigger_div.offsetTop

    if (bottomScrollHeight > triggerTopHeight) {
      svgContainer.classList.add("add")
      // console.log("working");

      if (num < 1) {
        setTimeout(addFirework, 10000)
        num++
      }

    }
   
  })
  
}

// setTimeout(addFirework, 10000)



function addClass() {
  console.log("1");
  svgContainer.classList.add("add")
  setTimeout(addFirework, 9000);
  
}

function addFirework() {
  fireContainer.style.visibility = "visible"
  // console.log("Timeout");
}


var mosjidImg = document.querySelector(".mosjid")
var link = {
  img: "mosjid-big.png"
}

if (screen.width > 700) {
  mosjidImg.src = `${link.img}`
}




function showFbLink() {
  fbLink.classList.toggle("showFbLink")
  popUp.classList.toggle("hidePopUp")
}

window.onload(setTimeout(showPop, 25000))

function showPop() {
  popControl.style.display = "block"
}