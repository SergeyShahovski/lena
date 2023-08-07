const cardContainer = document.querySelector(".card-container");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");

function checkVisibility() {
  const rect = cardContainer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.bottom >= 0 && rect.top <= windowHeight) {
    card1.style.transform = "translateX(0)";
    card2.style.transform = "translateX(0)";
  } else {
    card1.style.transform = "translateX(-100%)";
    card2.style.transform = "translateX(100%)";
  }
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("resize", checkVisibility);
checkVisibility();


