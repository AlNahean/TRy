var fixedNav = document.querySelector(".music-page-nav")
var getB = fixedNav.getBoundingClientRect()
height = fixedNav.getBoundingClientRect().y
var Show = document.querySelector(".show")


var scrollHeight = window.screenY
var navHeight = fixedNav.offsetTop


window.addEventListener("scroll", fire)
function fire() {
    var scrollHeight = window.scrollY
    
    Show.innerHTML= `${scrollHeight}`

    if (scrollHeight < navHeight) {
        fixedNav.classList.remove("fixed-music-page-nav")
    } else if(scrollHeight > navHeight){
        fixedNav.classList.add("fixed-music-page-nav")
    }

}


var trackInfo = [
    {
        name: "Forget About You",
        artist: "Will Gittens",
        img: "url('Forget About You.jpg')",
        img2: "Forget About You.jpg"
    },

]
Show.innerHTML = trackInfo[0].name
Show.style.background = `${trackInfo[0].img}`;

var musicMain = document.querySelector(".music-main")
var musicPageNav_ = document.querySelector(".music-page-nav")
var albumsContainer_ = document.querySelector(".albums-container")
var artistsContainer_ = document.querySelector(".artists-container")

// console.log(main);
// console.log(main.children[1])

for (let i = 0; i < musicPageNav_.children.length; i++) {
    // console.log(musicPageNav_.children[i]);
    musicPageNav_.children[i].addEventListener("click", Change)

}

function Change(e) {
    // console.log("nahean");
    // console.log(e.target);
    var gg = e.currentTarget.getAttribute("id").slice(0)
    console.log(gg);
    for (let i = 0; i < musicPageNav_.children.length; i++) {
        // console.log(musicPageNav_.children[i]);
        musicPageNav_.children[i].style.color = "white"
        
    }
    e.currentTarget.style.color = "red"



    var currentElement = document.getElementsByClassName(gg);

    for (let i = 0; i < musicMain.children.length; i++) {
        musicMain.children[i].style.display = "none"    
    }
    currentElement[0].style.display = "block"
    console.log(currentElement);
}






















































// const reviews = [
//     {
//       id: 1,
//       name: "susan smith",
//       job: "web developer",
//       img:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//       text:
//         "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//     },
//     {
//       id: 2,
//       name: "anna johnson",
//       job: "web designer",
//       img:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//       text:
//         "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//     },
//     {
//       id: 3,
//       name: "peter jones",
//       job: "intern",
//       img:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//       text:
//         "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//     },
//     {
//       id: 4,
//       name: "bill anderson",
//       job: "the boss",
//       img:
//         "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//       text:
//         "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//     },
//   ];