const backtoTop = document.getElementById("backtotop");

function checkScroll() {
  let scrollY = window.scrollY;

  if (scrollY !== 0) {
    backtoTop.classList.add("show");
  } else {
    backtoTop.classList.remove("show");
  }
}

function moveBacktoTop() {
  // window.scrollTo(0, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", checkScroll);
backtoTop.addEventListener("click", moveBacktoTop);

/*--------------------------*/

function transformPrev(event) {
  const slidePrev = event.target;
  const slideNext = slidePrev.nextElementSibling;
  const ultag = slidePrev.parentElement.parentElement.nextElementSibling;
  let activeLi = Number(ultag.getAttribute("data-position"));
  const liList = ultag.getElementsByTagName("li");

  if (ultag.clientWidth < liList.length * 260 + activeLi) {
    activeLi = activeLi - 260;
    ultag.style.transition = "transform 1s";
    ultag.style.transform = "translateX(" + String(activeLi) + "px)";
    ultag.setAttribute("data-position", activeLi);
  }

  if (activeLi < 0) {
    slideNext.classList.add("show");
    slideNext.addEventListener("click", transformNext);
  } else {
    slideNext.classList.remove("show");
  }

  if(ultag.clientWidth > liList.length * 260 + activeLi){
    slidePrev.classList.remove("show");
  }else {
    slidePrev.classList.add("show");
  }
}

function transformNext(event) {
  const slideNext = event.target;
  const slidePrev = slideNext.previousElementSibling;
  const ultag = slideNext.parentElement.parentElement.nextElementSibling;
  const liList = ultag.getElementsByTagName("li");
  let activeLi = Number(ultag.getAttribute("data-position"));

  if(activeLi < 0) {
    activeLi = activeLi + 260;
    ultag.style.transition = "transform 1s";
    ultag.style.transform = "translateX(" + String(activeLi) + "px)";
    ultag.setAttribute("data-position", activeLi);
  }

  if (activeLi < 0) {
    slideNext.classList.add("show");
    slideNext.addEventListener("click", transformNext);
  } else {
    slideNext.classList.remove("show");
  }

  if(ultag.clientWidth > liList.length * 260 + activeLi){
    slidePrev.classList.remove("show");
  }else {
    slidePrev.classList.add("show");
  }
}
const slidePrevList = document.getElementsByClassName("slide-prev");

for (let i = 0; i < slidePrevList.length; i++) {
  // ul 태그 선택
  let ElementList =
    slidePrevList[i].parentElement.parentElement.nextElementSibling;
  let liList = ElementList.getElementsByTagName("li");
  const activeLi = ElementList.getAttribute("data-position");
  if (ElementList.clientWidth < liList.length * 260 + Number(activeLi)) {
    slidePrevList[i].classList.add("show");
    slidePrevList[i].addEventListener("click", transformPrev);
  } else {
    slidePrevList[i].classList.remove("show");
  }

}
