const hamburger1 = document.querySelector(".hamburger  ");
const firstNav1 = document.querySelector(".firstnav ");
const wrapper = document.querySelector(".wrapper ");
const loader = document.querySelector(".loader ");

hamburger1.addEventListener("click", function () {
  firstNav1.classList.toggle("open");
});

function init() {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.display = "none";

    wrapper.style.display = "block";
    setTimeout(() => {
      wrapper.style.opacity = "1";
    }, 50);
  }, 3000);
}

init();
