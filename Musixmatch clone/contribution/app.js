var contributionHeader = document.querySelector(".contribution-header")
var pageInfoCtn = document.querySelector(".page-info-contribution")

window.addEventListener("scroll", ctnScroll)

function ctnScroll() {
    var scrollHeight = window.scrollY
    console.log(scrollHeight);
    if (scrollHeight >= 10) {
        contributionHeader.classList.add("fixed-ctn-header")
        pageInfoCtn.classList.add("color-info-ctn")
    }else if (scrollHeight < 10) {
        contributionHeader.classList.remove("fixed-ctn-header")
        pageInfoCtn.classList.remove("color-info-ctn")
    }
}