const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttonsContainer = document.getElementById("buttonsContainer");
const heartResult = document.getElementById("heartResult");
const questionCard = document.getElementById("questionCard");

// --- زر لا ---
function moveNoButton() {
  const maxX = window.innerWidth - 130;
  const maxY = window.innerHeight - 60;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// --- زر نعم ---
yesBtn.addEventListener("click", () => {
  buttonsContainer.style.display = "none";

  document.querySelector("h1").innerHTML = `
يا حبيبتي ويا روحي ويا عمري ويا دنيتي ويا كل حياتي
بحبك وهفضل أحبك لآخر يوم في عمري
♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️
بحبك يا دودو 🥺❤️
`;

  heartResult.style.display = "flex";
});
