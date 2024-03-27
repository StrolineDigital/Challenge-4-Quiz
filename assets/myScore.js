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
    highScore.push(newScore);
    
    highScore.sort((a,b) => b.score - a.score);

    highScore.splice(4);
    //Saves the high scores to local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));
    
    scoreInput.value = "";
    window.location.assign('HighScore.html');
    }
}
//Displays the final score on the score page
window.addEventListener('load', function() {

    for (const child of finalScore) {
        child.textContent = score;
    }
});
//Calls the addInitials function when the submit button is clicked
submitButton.addEventListener("click", addInitials);