const list = document.getElementById('highScoreList');
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
const resetHighScore = document.getElementById("resetHighScore");

// Creates a list item for each score in the highScore array
list.innerHTML = highScore.map(newScore => {
    return `<li class="scoreListItem">${newScore.intials} - ${newScore.score}</li>`;
}).join("");

// Resets the high score leaderboard when the reset button is clicked
resetHighScore.addEventListener("click", function() {localStorage.setItem("highScore", JSON.stringify([])); list.innerHTML = "";}, {capture: true});