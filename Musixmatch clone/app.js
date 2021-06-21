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
        album: "Forget About You",
        artist: "Will Gittens",
        albumArtist: "Will Gittens",
        img: '../Musixmatch clone/Musix Album Cover/Forget About You.jpg',
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
        img2: "url('../Musixmatch clone/Musix Album Cover/Mood (Remix).jpg')",
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
    {
        name: "Forget About You",
        album: "Forget About You",
        artist: "Will Gittens",
        albumArtist: "Will Gittens",
        img: '../Musixmatch clone/Musix Album Cover/Forget About You.jpg',
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


// console.log(Main.children)
for (let i = 0; i < homeNavigation.children.length; i++) {
    homeNavigation.children[i].addEventListener("click", HomeNav)
    // homeNavigation.children[i].style.display = "none"
    
}

function hideHomeNavComponents() {
    for (let i = 0; i < Main.children.length; i++) {
        Main.children[i].style.display = "none"
    }//this will make all the components hidden
}
function showHomeHome() {
    var NavHome =  document.querySelector(".nav-home")
    NavHome.style.display = "block"
}

//next two lines will make sure only NavHome is visible  
hideHomeNavComponents()
showHomeHome() 

function showHomeNavComponents(e) {
    var HomeNavclassNames = e.currentTarget.getAttribute("id").slice(0);
    var currentElement = document.getElementsByClassName(HomeNavclassNames)
    currentElement[0].style.display = "block" //important

}

function HomeNav(e) {
    hideHomeNavComponents()
    // for (let i = 0; i < Main.children.length; i++) {
    //     Main.children[i].style.display = "none"
    // }//this will make all the components hidden



    showHomeNavComponents(e)
    // var HomeNavclassNames = e.currentTarget.getAttribute("id").slice(0);
    // var currentElement = document.getElementsByClassName(HomeNavclassNames)
    // currentElement[0].style.display = "block" //important


    // console.log(HomeNavclassNames);
    // console.log(e.currentTarget.getAttribute("id").slice(0));
    // console.log(currentElement)


}



var getMore = document.querySelector(".get-more")

// console.log(getMore.parentElement)



// To set the song name of home page //

// var songCoverImage = document.querySelector(".h-recent-song-cover")
// songCoverImage.style.background = `${trackInfo[0].img}`;

//making recent song dynamic

var HomeRecentSongs = trackInfo2.map((song) => {
    return `                        <div class="h-recent-indivisual-songs">
                                        <img src="${song.img}" class="h-recent-song-cover">

                                        <div class="h-recent-song-info">
                                            <div class="h-recent-song-name">
                                               ${song.name}
                                            </div>
                                            <div class="h-recent--song-artist-name">
                                                ${song.artist}
                                            </div>
                                        </div>
                                    </div>
    `
})
HomeRecentSongs = HomeRecentSongs.join("");

var homeRecentSongsContainer = document.querySelector(".h-recent-songs")

homeRecentSongsContainer.innerHTML = HomeRecentSongs









//              -----MUSIC------
//This is where --Music-- Starts albums



//to make sure MusicComponent's nav is working properly
var fixedNav = document.querySelector(".music-page-nav")
var getB = fixedNav.getBoundingClientRect()
height = fixedNav.getBoundingClientRect().y
var Show = document.querySelector(".show")


var scrollHeight = window.screenY



window.addEventListener("scroll", fire)
function fire() {
    var scrollHeight = window.scrollY
    var navHeight = fixedNav.offsetTop
    // console.log(navHeight);
    
    Show.innerHTML= `${scrollHeight}`

    // navHeight = 81 //should have use navHeight instead of 82
    if (scrollHeight < 82) {
        fixedNav.classList.remove("fixed-music-page-nav")
        // console.log("a");
    } else if(scrollHeight > 81){
        fixedNav.classList.add("fixed-music-page-nav")
        // console.log(scrollHeight);
        // console.log("b");
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
function hideMusicNavComponents(e) {
    //hide targeted components
    for (let i = 0; i < musicMain.children.length; i++) {
        musicMain.children[i].style.display = "none"    
    }
}

function showMusicAlbums() {
    var musicNavAlbums = document.querySelector(".albums-container")
    musicNavAlbums.style.display = "block"
} 


hideMusicNavComponents()
showMusicAlbums()


function showMusicNavComponents(e){
    var gg = e.currentTarget.getAttribute("id").slice(0)
    console.log(gg);
    var currentElement = document.getElementsByClassName(gg);

    currentElement[0].style.display = "block"
    // console.log(currentElement);
}


function Change(e) {
    // console.log("nahean");
    // console.log(e.target);

    
    
    for (let i = 0; i < musicPageNav_.children.length; i++) {
        // console.log(musicPageNav_.children[i]);
        musicPageNav_.children[i].style.color = "green"//solve this
        
    }
    //to change the  selected div color to red
    e.currentTarget.style.color = "red"
    
    hideMusicNavComponents()
    //hide targeted components
    // for (let i = 0; i < musicMain.children.length; i++) {
    //     musicMain.children[i].style.display = "none"    
    // }
    



    showMusicNavComponents(e)

    //to set the targeted element to block
    //to get the nav name

    // var gg = e.currentTarget.getAttribute("id").slice(0)
    // console.log(gg);
    // var currentElement = document.getElementsByClassName(gg);

    // currentElement[0].style.display = "block"
    // console.log(currentElement);
}

//Making Music section Albums dynamic
var SecMusicAlbumsDynamic = trackInfo2.map((song) => {
    return `            <div class="indevisual-album">
                            <img src="${song.img}" class="album-cover">
                                
                            </img>
                            <div class="album-access">
                                <div class="album-info">
                                    <div class="album-name">
                                        ${song.album}
                                    </div>
                                    <div class="artist-name">
                                        ${song.albumArtist}
                                    </div>
                                </div>
                                <div class="more">
                                    ...
                                </div>
                            </div>
                        </div>
    `
})
SecMusicAlbumsDynamic = SecMusicAlbumsDynamic.join("");

var MusicAlbums = document.querySelector(".albumss")

MusicAlbums.innerHTML = SecMusicAlbumsDynamic



//making  music section albums 
 
var SecMusicArtistsDynamic = trackInfo2.map((song) => {
    return `             <div class="artist-info">
                            <div class="artist-name-artist">
                                ${song.artist}
                            </div>
                            <div class="collection-info">
                                <div class="no-of-album">
                                    1 Album
                                </div>
                                <div class="no-of-songs">
                                    1 song
                                </div>
                            </div>
                        </div>
    `
})
SecMusicArtistsDynamic = SecMusicArtistsDynamic.join("");

var MusicArtists = document.querySelector(".indivisual-artists")

MusicArtists.innerHTML = SecMusicArtistsDynamic


//Tracks
var SecMusicTracksDynamic = trackInfo2.map((song) => {
    return `            <div class="track-info">
                            <img src="${song.img}" class="track-cover">
                            <div class="indivisual-track-info">
                                <div class="track-name">
                                    ${song.name}
                                </div>
                                <div class="track-artist">
                                    ${song.artist}
                                </div>
                            </div>
                            <div class="track-more">
                                ...
                            </div>
                        </div>
    `
})
SecMusicTracksDynamic = SecMusicTracksDynamic.join("");

var MusicTracks = document.querySelector(".indivisual-tracks")

MusicTracks.innerHTML = SecMusicTracksDynamic






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













