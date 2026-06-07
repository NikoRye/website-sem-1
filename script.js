/* popup på forsiden */
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

/* læs mere på tema siderne, fungere på flere knapper */
document.querySelectorAll(".read-more-btn").forEach((button) => {
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

/* læs mere på om mig siden, fungere på en specifik knap */
const btn = document.querySelector(".read-more-btn");
const moreText = document.querySelector(".more-text");

if (btn && moreText) {
  btn.addEventListener("click", function () {
    moreText.classList.toggle("show");

    if (moreText.classList.contains("show")) {
      btn.textContent = "Vis mindre";
    } else {
      btn.textContent = "Læs mere";
    }
  });
}

/* burger */
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}


/* popup på tema galleri */
const billeder = document.querySelectorAll(".galleri img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const luk = document.querySelector(".luk");

// Åbn popup når man klikker på et billede
billeder.forEach(img => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// Luk popup når man klikker på kryds
luk.addEventListener("click", () => {
  popup.style.display = "none";
});

// Luk popup når man klikker udenfor billedet
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
