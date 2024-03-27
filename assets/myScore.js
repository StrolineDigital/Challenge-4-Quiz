const finalScore = document.getElementsByClassName("finalScore");
const scoreInput = document.getElementById("scoreInput");
const submitButton = document.getElementById("submit");
const score = JSON.parse(localStorage.getItem("score"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];

//Sorts the high scores in descending order and limits the list to 4 scores
function addInitials() {
if (scoreInput.textContent = "") {
    alert("Please Enter User Initials!");
} else {
    const newScore = {
        "score": score,
        "intials": scoreInput.value.trim()
    };
    console.log(newScore,"score saved!");

    highScore.push(newScore);

    highScore.sort((a,b) => b.score - a.score);

    highScore.splice(4);

    localStorage.setItem("highScore", JSON.stringify(highScore));

    scoreInput.value = "";
    window.location.assign('HighScore.html');
    }
}

window.addEventListener('load', function() {

    for (const child of finalScore) {
        child.textContent = score;
    }
});
submitButton.addEventListener("click", addInitials);