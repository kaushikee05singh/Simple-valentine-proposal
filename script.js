const noBtn = document.getElementById("noBtn");
const heartContainer = document.getElementById("small-hearts");

/* RUNNING AWAY NO BUTTON */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

/* SMALL FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("small-heart");
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);
