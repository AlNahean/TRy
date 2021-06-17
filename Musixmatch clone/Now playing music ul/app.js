var trackInfo = [
    {
        name: "Forget About You",
        album: "",
        artist: "Will Gittens",
        albumArtist: "",
        img: "url('Forget About You.jpg')",
        img2: "Forget About You.jpg",
        year: "",
        disc: "",
        track: "",
        genere: "",
    },

]
console.log(trackInfo.lol);

trackInfo.lol = "nahean"

console.log(trackInfo.lol);

delete trackInfo.lol

console.log(trackInfo.lol);


//testing(1)

trackInfo.forEach(e => {
    console.log("song name is " +e.name+ " And artist name is " +e.artist);
})


//sdgfnasdfhsdklgfhasdkgf
var CurrentCover = document.querySelector(".now-playing-ul-current-song-cover")

CurrentCover.style.background = `${trackInfo[0].img}`
CurrentCover.style.backgroundSize = "cover"


var contributeClicker = document.querySelector(".now-playing-ul-contribute")
var contributeBack = document.querySelector(".lyric-edit-container-back-back")
var contributeContainer = document.querySelector(".lyric-edit-container-display")

contributeClicker.addEventListener("click", showLyricEdit)
contributeBack.addEventListener("click", hideLyricEdit)


function showLyricEdit(e) {
    console.log("nahean");
    contributeContainer.style.display = "block"
}
function hideLyricEdit(e) {
    console.log("hide");
    contributeContainer.style.display = "none"
}





var songUlMore = document.querySelector(".now-playing-ul-more")
var SongUl = document.querySelector(".display-settings-div--display")
var SongUlBack = document.querySelector(".d-s-container-back")

SongUlBack.addEventListener("click", quitSongUlMore)
songUlMore.addEventListener("click", showSongUlmMore)

function showSongUlmMore() {
    SongUl.style.display = "block"
}


function quitSongUlMore() {
    SongUl.style.display ="none"
    console.log("Nahean");
}



var currentQueue = document.querySelector(".song-ul-current-queue-display")
var currentQueueTrigger = document.querySelector(".now-playing-ul--current-queue")
var currentQueueBack = document.querySelector(".c-q-back")

currentQueueTrigger.addEventListener("click", showCurrentQueue)
currentQueueBack.addEventListener("click", hideCurrentQueue)

function showCurrentQueue(e) {
    currentQueue.style.display = "block"
}

function hideCurrentQueue(e) {
    currentQueue.style.display = "none"
}
 



// dis
// var test = document.querySelector(".d-s-lyrics-wos-display")

// test.style.display = "none"



                  //Edit song info => esn //

var esnTrigger = document.querySelector(".d-s-esn-trigger")
var esnDisplay = document.querySelector(".esn-display")
var esnBack = document.querySelector(".esn-back")
esnTrigger.addEventListener("click", showEsn)
esnBack.addEventListener("click", hideEsn)

function showEsn() {
    SongUl.style.display = "none"
    esnDisplay.style.display = "block"
}
function hideEsn() {
    esnDisplay.style.display = "none"
}

// End of edit song Info =>esn//

//

//

var wosToggle = document.querySelector(".wos-toggle")
var wosToggleCircle = document.querySelector(".wos-toggle-circle")

wosToggle.addEventListener("click", wosToggl)

function wosToggl() {
    wosToggleCircle.classList.toggle("wos-toggle-start")   
    // console.log("Nahean");
}



//

//

