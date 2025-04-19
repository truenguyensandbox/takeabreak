let timerDisplay = document.getElementById("timer");
let timeLeft = 15 * 60;
let timerInterval;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 15 * 60;
  timerDisplay.textContent = formatTime(timeLeft);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) clearInterval(timerInterval);
  }, 1000);
}
