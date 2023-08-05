console.log("hello motherfucker");

const navLink1 = document.querySelector(".nav-link1");
const navLink2 = document.querySelector(".nav-link2");
const navLink3 = document.querySelector(".nav-link3");
const navBtn = document.querySelector(".nav-btn");
const btnTransfer = document.querySelector(".btnTransfer");
const btnLoan = document.querySelector(".btnLoans");
const btnClosing = document.querySelector(".btnClosing");
const transferCon = document.querySelector(".transfercon");
const loanCon = document.querySelector(".loancon");
const closingCon = document.querySelector(".closingcon");
const testimonal1 = document.querySelector(".testimonal1");
const testimonal2 = document.querySelector(".testimonal2");
const testimonal3 = document.querySelector(".testimonal3");
// const testimonals = document.querySelectorAll(".testimonals");
const leftBtn = document.querySelector(".leftbtn");
const rightBtn = document.querySelector(".rightbtn");
const sec4btn = document.querySelector(".sec4btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalCloseBtn = document.querySelector(".modalclosebtn");
const modalOpenBtn = document.querySelectorAll(".modalopenbtn");
const testimonals = document.querySelectorAll(".testimonals");
const btn = document.querySelector(".btn");
const cookieBtn = document.getElementById("cookieBtn");
const btnCloseCookie = document.querySelector("btn--close-cookie");
const CookieMsg = document.querySelector(".cookie-message");
const navbar = document.querySelector(".navbar");
const section1 = document.querySelector("#section--1");
const navImg = document.querySelector("#navImg");
// const cookieBtn = document.getElementById('cookieBtn')

// modalOpenBtn.addEventListener('click' , (e) => {
//     e.preventDefault()
//     modal.classList.toggle('hidden')
//     overlay.classList.toggle('hidden')
// })

//modal handler

modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

//three button handlers

btnLoan.addEventListener("click", () => {
  loanCon.classList.remove("hidden");
  transferCon.classList.add("hidden");
  closingCon.classList.add("hidden");
  btnLoan.classList.add("btnactive");
  btnClosing.classList.remove("btnactive");
  btnTransfer.classList.remove("btnactive");
});

btnClosing.addEventListener("click", () => {
  loanCon.classList.add("hidden");
  transferCon.classList.add("hidden");
  closingCon.classList.remove("hidden");

  btnClosing.classList.add("btnactive");
  btnLoan.classList.remove("btnactive");
  btnTransfer.classList.remove("btnactive");
});

btnTransfer.addEventListener("click", () => {
  loanCon.classList.add("hidden");
  transferCon.classList.remove("hidden");
  closingCon.classList.add("hidden");

  btnLoan.classList.remove("btnactive");
  btnClosing.classList.remove("btnactive");
  btnTransfer.classList.add("btnactive");
});

// let idx = 0;

// function changeTestimonal() {
//   if (idx > testimonals.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = testimonals.length - 1;
//   }
//   testimonals.style.transform = "translateX(150px)";
// }

// leftBtn.addEventListener("click", () => {
//   idx--;
//   changeTestimonal();
// });
// rightBtn.addEventListener("click", () => {
//   idx++;
//   changeTestimonal();
// });

// creating cookie content

// const afterTime = setTimeout( () =>{

//      const header =  document.querySelector('.header')
     
//      const message = document.createElement("div");
//      message.classList.add("cookie-message");
//      message.innerHTML =
//       'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie" id="cookeiBtn" >Got it</button>';
     
//      header.before(message)

   
// }, 5000 )

// cookieBtn.addEventListener("click", function () {
//   message.remove();
// });

// scrolling the learn more button

document.querySelector('#hero-btn').addEventListener('click' , function(e) {
const s1coords = section1.getBoundingClientRect();
console.log(s1coords)
console.log(e.target.getBoundingClientRect())

console.log('height/width viewport' , document.documentElement.clientHeight
, document.documentElement.clientWidth)


// window.scrollTo(
//   s1coords.left + window.pageXOffset ,
//   s1coords.right + window.pageYOffset
// )

section1.scrollIntoView({behavior : 'smooth'})
})

// scrolling the page 

document.querySelectorAll('.nav-link').forEach((el) =>{
el.addEventListener('click',(e) =>{
e.preventDefault()
const id = el.getAttribute('href')
console.log(id)
document.querySelector(id).scrollIntoView({behavior: 'smooth'})
})
} )

// mouse over to the navbar 

const handleHover = function(e) {
if(e.target.classList.contains('nav-link')){
  const link = e.target
  console.log(link)
  const siblinks = link.closest('.navbar').querySelectorAll('.nav-link')
  const logo = link.closest('.navbar').querySelector('.img')

  siblinks.forEach((el) =>{
  if(el !== link){
    el.style.opacity = this
  }

  })

navImg.style.opacity = this
}
}
navbar.addEventListener('mouseover' , handleHover.bind(0.5))
navbar.addEventListener('mouseout' , handleHover.bind(1))

// sticky navbar

const initialCoords = section1.getBoundingClientRect()

window.addEventListener('scroll' , () =>{
  if(window.scrollY > initialCoords.top ){
    navbar.classList.add('sticky')
  }else{
    navbar.classList.remove('sticky')
  }
})

// poping the content when scrolling
const allSections = document.querySelectorAll('.section')

const revealSection = function (entries , observer) {
   const [entry] = entries;

   if(!entry.isIntersecting) return;

   entry.target.classList.remove('section--hidden')

}

const sectionObserver = new IntersectionObserver(revealSection , {
  root : null,
  threshold: 0.15,
})

allSections.forEach(function(section){
sectionObserver.observe(section);
section.classList.add('section--hidden')
})

//lazy loading of images

const imgtargets = document.querySelectorAll('img[data-src]')

const loadImg = function(entries , observer) {
const [entry] = entries;

if(!entry.isIntersecting) return;

entry.target.src = entry.target.dataset.src;

entry.target.addEventListener('load' , function() {
  entry.target.classList.remove('lazy-img')
})
observer.unobserve(entry.target);

}
const imgObserver = new IntersectionObserver(loadImg , {
  root: null,
  threshold: 0,
  // rootMargin: '200px',
})

imgtargets.forEach(img => imgObserver.observe(img));

// testimonal slider

const slider = function (){
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const testimonial = document.querySelector(".testimonial");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;
const createDots = function(){


  slides.forEach(function (_ , i) {
    dotContainer.insertAdjacentHTML(
      "beforeend" 
      ,`<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};


const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot')
  .forEach(dot => dot.classList.remove('dots__dot--active'))

  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active')
}

  const goToSlide = function (slide) {
    slides.forEach((s , i) => (
      s.style.transform = `translateX(${100 * (i - slide)}%)`
      ));};
      
      const nextSlide = function() {
        // slides.classList.remove('hidden')
        if(curSlide === maxSlide - 1){
          curSlide = 0;
        }else{
          curSlide++
        }
        goToSlide(curSlide);
        activateDot(curSlide);
      }
      
      const prevSlide = function () {
        // slides.classList.remove('hidden')
        
        if(curSlide === 0){
          curSlide = maxSlide - 1
        }else{
          curSlide--;
        }
        goToSlide(curSlide)
        activateDot(curSlide);
}

 const init = function () {
   goToSlide(0);
   createDots();

   activateDot(0);
 };
 init();

btnLeft.addEventListener('click' , prevSlide);
btnRight.addEventListener('click' , nextSlide);

 dotContainer.addEventListener("click", function (e) {
   if (e.target.classList.contains("dots__dot")) {
     const { slide } = e.target.dataset;
     goToSlide(slide);
     activateDot(slide);
   }
 });
};
slider();




