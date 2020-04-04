console.log("Not empty")

let myBtn = document.getElementById(`navbarBtn`);
let hiddenContent = document.getElementById(`navbarHiddenContent`);
let escapeBtn = document.getElementById(`collapseEscapeButton`);
let anchorTag = hiddenContent.children[1].children

function contentWidth(element, value) {
    element.style.width = `${value}`
}

myBtn.addEventListener(`click`, function() {
    hiddenContent.style.width = `100%`
})

escapeBtn.addEventListener(`click`, function(){
    hiddenContent.style.width = `0%`
})

for (let i = 0; i < anchorTag.length; i++) {
    anchorTag[i].addEventListener(`click`, function() {
        hiddenContent.style.width = `0%`
    })    
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
  });

$('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    dots: true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            autoplay: true,
            autoplayHoverPause: true,
            items:1,
            nav:true,
            loop:true
        }
    }
    
})

$(`.owl-carousel .owl-dot`).owlCarousel({
    autoHeight:true,
    autoWidth: true    
})

let previousBtn = document.getElementsByClassName(`owl-prev`)[0]
let nextBtn = document.getElementsByClassName(`owl-next`)[0]
previousBtn.innerHTML = `&#x2BC6`
nextBtn.innerHTML = `&#x2BC5`


// my-slider-function
// let pages = document.getElementsByClassName(`pages`);
// let sliderBtn = document.getElementsByClassName(`sliderBtn`)
// let sliderDot = document.getElementsByClassName(`sliderDot`);

// function hidePages(pages){
//     for (let page of pages) {
//        page.style.display = "none";
//     }
// }

// function showPage(page){
//     page.style.display = "block";
// }

// hidePages(pages);
// showPage(pages[0]);

// let sliderCounter = 0;

// function sliderButtons() {
//     hidePages(pages)
//     showPage(pages[sliderCounter]);
// }

// sliderBtn[0].addEventListener(`click`, function(){
//     if(sliderCounter === 0) return;
//     sliderDot[sliderCounter].classList.remove(`active`)
//     sliderCounter = sliderCounter - 1;
//     hidePages(pages)
//     showPage(pages[sliderCounter])
//     sliderDot[sliderCounter].classList.add(`active`)
// })

// sliderBtn[1].addEventListener(`click`, function() {
//     if(sliderCounter === 5) return;
//     sliderDot[sliderCounter].classList.remove(`active`)
//     sliderCounter++
//     sliderButtons();
//     sliderDot[sliderCounter].classList.add(`active`)
// })