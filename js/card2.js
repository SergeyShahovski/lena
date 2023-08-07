const cardContainer1 = document.querySelector(".card-container1");
const card__one = document.querySelector(".card__one");
const card__two = document.querySelector(".card__two");

function checkVisibility() {
  const rect = cardContainer1.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.bottom >= 0 && rect.top <= windowHeight) {
    card__one.style.transform = "translateX(0)";
    card__two.style.transform = "translateX(0)";
  } else {
    card__one.style.transform = "translateX(-100%)";
    card__two.style.transform = "translateX(100%)";
  }
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
checkVisibility();