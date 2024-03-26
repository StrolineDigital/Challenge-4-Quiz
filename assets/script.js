//Goals:
//1) get questions to turn red or green upon being answered (seems that the event listener isn't working)
//2)get slides to automatically transition when a question is answered, with a 1 second delay between transitions
// 'active-slides' needs to be defined somewhere, not sure where.
//3)Make a functional start button which displays the first question after it has been clicked and begins the timer
//4)get show results function to respond to a timer and deduct time if a question is answered incorrectly
//5)get a submit button to function, take an input of user's initials and send local storage data to the high score page

//This function generates the quiz on the HTML page using a variable for output
//Sets the variable to define the "slide" (the question currently being displayed)
const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const activeSlides = document.querySelectorAll(".active-slide");
  

function buildQuiz(){
        const output = [];
  
    // for each question store the list of possible answers
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        let selector = document.createElement ("input");
        const answers = [];

        // and for each available answer generate a button
        for(letter in currentQuestion.answers){

             answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // adds the question and its answers to the output on HTML page
        output.push(
          `<div class="slide active-slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // Combines the questions and answers and pushes them to the quiz container
    quizContainer.innerHTML = output.join('');
  }

  //This function takes the answer input by the user and interprets the results
  function showResults() {
    // gathers information from the answer containers in the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // Tracks user answers
    let numCorrect = 0;

    // Tracks the input provided by user (which button was selected)
    myQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
        
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        let selector = document.createElement ("input");
        
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

      // Show the next question after a brief delay 
          setTimeout(() => {
        showNextSlide();
    }, 1000); // 1000 milliseconds (1 seconds) delay before showing next slide
}

//This function handles the display of the question
//make this function work with the start button

function showSlide(n) {
  showSlide(currentSlide);
  //start.style.display = 'none';
  console.log('working');
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
};
   
  //Handles displaying next slide from user answering a question after an answer button has been clicked
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  //This function hides all slides until start button has been clicked
    function hideAllSlides() {
    activeSlides.forEach(function(activeSlide){
      activeSlide.style.display = 'none'
    }) 
        
    };

    //Calls the slide hiding function until start button is clicked
    hideAllSlides();

    let selector = document.createElement ("input");
  //Listens for selection of an answer button and transitions to next slide
  selector.addEventListener ("change", showNextSlide);
  

  //Defines variables for quiz and submit in the
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  const start = document.getElementById('start');
  
   const myQuestions = [
    {
      question: "Which of the following keywords is used to define a variable in Javascript?",
      answers: {
        a: "var",
        b: "let",
        c: "both A and B",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "Javascript is an _______ language?",
      answers: {
        a: "object-oriented",
        b: "object-based",
        c: "procedural",
        d: "none of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Which of the following methods is used to access HTML elements using Javascript?",
      answers: {
        a: "getElementById()",
        b: "getElementsByClassName()",
        c: "both A and B",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: {
          a: "console.log()",
          b: "window.alert()",
          c: "document.write()",
          d: "all of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "How can a datatype be declared to be a constant type?",
        answers: {
          a: "var",
          b: "constant",
          c: "let",
          d: "const"
        },
        correctAnswer: "d"
      }
  ];

// display quiz right away
buildQuiz();



  // Show the first slide when start button is clicked
  //start.addEventListener('click', showSlide(currentSlide));
 
  // Listens for selection of button by user and runs the showResults function
  selector.addEventListener ("change", showResults);
  