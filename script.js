
const linksContainer = document.querySelector(".pagination-contentBox");
const links = document.querySelector(".pagi-containerBox");

const navbar = document.getElementById("nav");
const scrollLinks = document.querySelectorAll(".scroll-link");


scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    // console.log(id);
    const element = document.getElementById(id);
    const navHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav =  linksContainer.classList.contains("pagi-container");
    let position = element.offsetTop;   

  if (!fixedNav ) {
    position = position - navHeight;
  }
  if (navHeight > 82) {
    position = position + containerHeight;
  }
  window.scrollTo({
    left: 0,
    top: position,
  });

 
});



})

let addSelectClass = function () {
  removeSelectClass();
  this.classList.add("active-btn");
};

let removeSelectClass = function () {
  for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].classList.remove("active-btn");
  }
};
for (let i = 0; i < scrollLinks.length; i++) {
  scrollLinks[i].addEventListener("click", addSelectClass);
}


// toggle

const navToggle = document.querySelector(".navToggle");
const navBar = document.querySelector('.navBar')
const navlinks = document.querySelector('.links-container');
const closeBtn = document.querySelector('.close-btn');


navToggle.addEventListener('click', function(){
  navlinks.classList.add('show-container')
})

closeBtn.addEventListener('click', function(){
  navlinks.classList.remove('show-container')
})
