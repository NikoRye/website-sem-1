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

/* læs mere på tema siderne */
document.querySelectorAll(".read-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const article = button.closest("article");
        article.classList.toggle("open");

        if (article.classList.contains("open")) {
            button.textContent = "Læs mindre";
        } else {
            button.textContent = "Læs mere";
        }
    });
});

/* burger */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});