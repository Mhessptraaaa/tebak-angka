let secretNumber;
let attempts;

function initGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "Masukkan tebakanmu!";
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  attempts++;

  if (!guess || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Masukkan angka 1-100!";
    return;
  }

  if (guess === secretNumber) {
    document.getElementById("message").textContent = `🎉 Benar! Angkanya ${secretNumber}. (${attempts} kali coba)`;
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Terlalu rendah! Coba lagi.";
  } else {
    document.getElementById("message").textContent = "Terlalu tinggi! Coba lagi.";
  }
}

function resetGame() {
  initGame();
}

// Inisialisasi pertama kali
initGame();