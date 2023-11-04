/*-- Tabs Script --*/

var links = Array.from(document.getElementsByClassName('list-link'));
var tab_content = Array.from(document.getElementsByClassName('list-content'));
tab_content[0].classList.add('active');
links[0].classList.add('active');
links.forEach(function (link) {
    link.addEventListener('click', tabs);
});

function tabs() {
    for (i = 0; i <= links.length; i++) {
        links[i].classList.remove('active');
        this.classList.add('active');
        content_active = document.getElementById(this.dataset.tab);
        for (x = 0; x < tab_content.length; x++) {
            tab_content[x].classList.remove('active');
        }
        content_active.classList.add('active');
    }
}


/*-- Gallery Jquery Script --*/

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

});

/*-- Carousel Script --*/
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 20000,
    wrap: false
})

/*-- Animate Build Icin When Scroll --*/
let scrollpos = window.scrollY

const icon = document.querySelector(".building-icon");
const scrollChange = 1

const add_class_on_scroll = () => icon.classList.add("animate")
const remove_class_on_scroll = () => icon.classList.remove("animate")

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }

})

/*-- Display and hide nav dropmenu when click  dropdown-toggle --*/

const dropdownBtn = document.querySelector(".dropdown-toggle");
let toggleDropmenu = (e) => {
    e.target.nextElementSibling.classList.toggle("viewdropmenu")
}
dropdownBtn.addEventListener("click", toggleDropmenu);