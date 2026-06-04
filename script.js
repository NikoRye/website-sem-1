/* popup */
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
/* klik på bagrunden for at fjerne popup */
window.onclick = function (event) {
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};

/* burger */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});