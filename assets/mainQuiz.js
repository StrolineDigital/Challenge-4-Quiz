const main = document.getElementById("quiz");
const question = document.getElementById("question");
const timer = document.getElementById("time");
const isCorrect = document.getElementById("isCorrect");
const totalScore = document.getElementById("totalScore");

let number = 0;
let time = 60;

// Sets the timer to count down from 60
let counter = setInterval(function () {
    time -= 1;
    timer.textContent = time;

    if (timer.textContent <= 0) {
        time = 0;
        localStorage.setItem("Time", String(time));
        window.location.assign("Score.html")
    }
    // Checks if the timer has reached the end of the questions array
    if (number === questions.length) {
        clearInterval(counter);

        console.log(time);
        localStorage.setItem("score", String(time));
        window.location.assign("Score.html");
    }
    return time;
}, 1000);

//Populates the questions and answers in their respective html elements
function getQuestions() {
    for (let q = number; q < questions.length; q++) {

        question.textContent = questions[number].question;

        for (let i = 0; i < questions[number].answers.length; i++) {
            let answer = document.getElementById("answer" + (i + 1));

            answer.textContent = questions[number].answers[i];
        }
    }
}

function checkAnswer(event) {
        // Checks if you are clicking on the correct answer button
        if (event.target.dataset.button === "answer") {
            if (event.target.textContent === questions[number].correctAnswer) {
               // If the answer is correct, the text will turn green and the next question will be displayed
                isCorrect.textContent = "Correct!"
                isCorrect.style.color = "green";
                
                getQuestions(number += 1);
                return number;
            } else {
                // If the answer is wrong, the text will turn red and the next question will be displayed
                isCorrect.textContent = "Wrong!"
                isCorrect.style.color = "red";
                 // If the answer is wrong, the timer will decrease by 10 seconds
                time -= 10;
                getQuestions(number += 1);
                return number;
            }
        }
}

//calls the getQuestions function when the window loads
window.addEventListener("load", () => { getQuestions();});
//calls the checkAnswer function when the document is clicked
document.addEventListener("click", checkAnswer);