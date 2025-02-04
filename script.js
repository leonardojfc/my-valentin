const messages = [
  "¿Estás segura, mi vida?",
  "¿Realmente segura, mi amor? 🤨",
  "¿Completamente segura, corazón?",
  "Por favor, piénsalo...",
  "¡Solo piénsalo un momento!",
  "Si dices que no, me entristecerás...",
  "Amor, me pondrás muy triste...",
  "Cariño, me harás súper mega triste... 😢",
  "Bueno, ya no insistiré...",
  "¡Mentira! ¡Di que sí, ya pue! ❤️",
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = `${currentSize * 1.2}px`;

  // Añadir efecto de temblor al botón "No"
  noButton.classList.add("wobble-animation");
  setTimeout(() => {
    noButton.classList.remove("wobble-animation");
  }, 1000);
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}
