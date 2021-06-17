//old obj

var trackInfo = [
    {
        name: "Forget About You",
        artist: "Will Gittens",
        img: "url('Forget About You.jpg')",
        img2: "Forget About You.jpg"
    },

]



//new obj
var trackInfo2 = [
    {
        name: "Forget About You",
        album: "",
        artist: "Will Gittens",
        albumArtist: "",
        img: '../Musix Album Cover/Forget About You.jpg',
        year: "",
        disc: "",
        track: "",
        genere: "",
    },
    {
        name: "Dancing With Your Ghost",
        album: "Dancing With Your Ghost",
        artist: "Sasha Sloan",
        albumArtist: "Sasha Sloan",
        img: '../Musixmatch clone/Musix Album Cover/Dancing with Your Goast.jpg',
        img2: "url('../Musix Album Cover/Dancing with Your Goast.jpg')",

        year: "",
        disc: "",
        track: "",
        genere: "",
    },
    {
        name: "Drivers Liscence",
        album: "Drivers Liscence",
        artist: "Olivia Rodrigo",
        albumArtist: "Olivia Rodrigo",
        img: '../Musixmatch clone/Musix Album Cover/Drivers Liscence.jpg',
        img2: "url('../Musix Album Cover/Drivers Liscence.jpg')",
        year: "",
        disc: "",
        track: "",
        genere: "",
    },
    {
        name: "Mood NightTiks",
        album: "Mood NightTiks",
        artist: "da22a",
        albumArtist: "da22a",
        img: '../Musixmatch clone/Musix Album Cover/Mood (Remix).jpg',
        img2: "url('../Musix Album Cover/Mood (Remix).jpg')",
        year: "",
        disc: "",
        track: "",
        genere: "",
    },
    {
        name: "The Scintist (cover)",
        album: "Alex Groot & Friends, Vol.6",
        artist: "Alex Groot & Jada Facer",
        albumArtist: "Alex Groot",
        img: '../Musixmatch clone/Musix Album Cover/The Scientist(cover).jpg',
        img2: "url('../Musix Album Cover/The Scientist(cover).jpg')",

        year: "",
        disc: "",
        track: "",
        genere: "",
    },
    // {
    //     name: "",
    //     album: "",
    //     artist: "",
    //     albumArtist: "",
    //     img: "url('../Musix Album Cover/')",
    //     year: "",
    //     disc: "",
    //     track: "",
    //     genere: "",
    // },

]

trackInfo2.forEach(e => console.log(e.artist))



//obj with name

// var trackInfoWname = {
//     forgetAboutYou: {
//         name: "Forget About You",
//         album: "",
//         artist: "Will Gittens",
//         albumArtist: "",
//         img: "url('Forget About You.jpg')",
//         img2: "Forget About You.jpg",
//         year: "",
//         disc: "",
//         track: "",
//         genere: "",
//     },

//     marryMe: {
//         name: "Marry Me",
//         album: "",
//         artist: "Will Gittens",
//         albumArtist: "",
//         img: "url('Forget About You.jpg')",
//         img2: "Forget About You.jpg",
//         year: "",
//         disc: "",
//         track: "",
//         genere: "",
//     }, 

// }

// var testT = {
//     q: {
//         a: "aa",
//         b: "nn"
//     },
//     w: {
//         a: "cc",
//         b: "vv",
//     }
// }

// console.log(testT[0]);

// console.log(trackInfoWname.forgetAboutYou);


var homeNavigation = document.querySelector(".navigation")
var Main = document.querySelector(".main")


console.log(Main.children)
for (let i = 0; i < homeNavigation.children.length; i++) {
    homeNavigation.children[i].addEventListener("click", HomeNav)
    // homeNavigation.children[i].style.display = "none"
    
}

function HomeNav(e) {
    for (let i = 0; i < Main.children.length; i++) {
        Main.children[i].style.display = "none"
    }//this will make all the components hidden

    var classNam = e.currentTarget.getAttribute("id").slice(0);
    console.log(classNam);
    var currentElement = document.getElementsByClassName(classNam)
    // console.log(e.currentTarget.getAttribute("id").slice(0));
    console.log(currentElement)
    currentElement[0].style.display = "block" //important
}
var getMore = document.querySelector(".get-more")

console.log(getMore.parentElement)



// To set the song name of home page //

var songCoverImage = document.querySelector(".h-recent-song-cover")
songCoverImage.style.background = `${trackInfo[0].img}`;



//              -----MUSIC------
//This is where --Music-- Starts albums

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


//       ------MUSIC ENDS HERE-----------/>



//     -------Contribution Starts Here-----------
// --------------Contribution--------------
var contributionHeader = document.querySelector(".contribution-header")
var pageInfoCtn = document.querySelector(".page-info-contribution")

window.addEventListener("scroll", ctnScroll)

function ctnScroll() {
    var scrollHeight = window.scrollY
    // console.log(scrollHeight);
    if (scrollHeight >= 10) {
        contributionHeader.classList.add("fixed-ctn-header")
        pageInfoCtn.classList.add("color-info-ctn")
    }else if (scrollHeight < 10) {
        contributionHeader.classList.remove("fixed-ctn-header")
        pageInfoCtn.classList.remove("color-info-ctn")
    }
}



// var syncSongCover = document.querySelector(".sync-song-cover")

// syncSongCover.style.background = `${trackInfo2[1].img}`
// syncSongCover.style.backgroundSize = "cover"

// console.log(trackInfo2[1].img);

var displaySyncLyricSong = trackInfo2.map((song) => {
    return `            <div class="sync-song-suggestions-container">
                            <img src="${song.img}" class="sync-song-cover">
                            <div class="sync-song-info">
                                <div class="sync-song-name">
                                    ${song.name}
                                </div>
                                <div class="sync-artist-name">
                                    ${song.artist}
                                </div>
                            </div>
                        </div>`
})
displaySyncLyricSong = displaySyncLyricSong.join("");

// console.log(displaySyncLyricSong);

var syncLyricSongSuggestion = document.querySelector(".sync-song-suggestions")


syncLyricSongSuggestion.innerHTML = displaySyncLyricSong







//     -------Contribution Ends Here-----------
