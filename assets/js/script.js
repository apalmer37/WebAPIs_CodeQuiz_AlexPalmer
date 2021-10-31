var renQuestions = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var questionNum = 0;

var submitButton = document.querySelector("#submit");


var timer;
var timerCount;

// The startGame function is called when the start button is clicked
function startGame() {
  timerCount = 90;
  timerElement.textContent = timerCount;
  // Hides start after start of quiz
 
  startButton.style.display = "none";
  render();
  // create();
  startTimer(); 
}

// The startTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerElement.textContent = timerCount;
    if (timerCount > 0) {
      timerCount--;
    }
    $("#incorrect").addClass("hide");
    $("#correct").addClass("hide");
      // Tests if win condition is met
      // else if (timerCount > 0) {
      //   // Clears interval and stops timer
      //   clearInterval(timer);
      // };
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      endQuiz();
      // loseGame();
    }
  }, 1000);
}

function answerQuestion(event) {
  var answerClick = event.target.innerText;
  if (answerClick == quizQuestions[questionNum].answer){
    correctAnswer();
  } else {
    incorrectAnswer();
    
  }
  if (questionNum == quizQuestions.length - 1 || timerCount <= 0) {
    endQuiz()
  } else {
    questionNum++;
    render();
  }
};

function endQuiz(){
  clearInterval(timer);
  $("#questions").addClass("hide");
  $("#end-screen").removeClass("hide");
  $("#final-score").text(timerCount);
};

function incorrectAnswer(){
  timerCount -= 10;
  $("#incorrect").removeClass("hide");
}

function correctAnswer(){
  $("#correct").removeClass("hide");
}


// renders quiz questions
function render() {
  questionChoices.innerHTML = "";
  // renQuestions.innerHTML = quizQuestions;
  var currQuestion = quizQuestions[questionNum];
  questionTitle.textContent = currQuestion.question;
  $("#questions").removeClass("hide");
  $("#start-screen").addClass("hide");
  for (let i = 0; i < currQuestion.multiChoices.length; i++) {
    create(currQuestion.multiChoices[i]);
  }
  // let showMulti = quizQuestions.multiChoices;
  // document.write([quizQuestions[0]]);
}



function saveInitials(){
  var scores = JSON.parse(localStorage.getItem('scores'));
  if (!scores || scores.length <= 0) {
    scores = [];
  }
  var score = { 
    'initials': $("#initials").val(), 
    'score': timerCount
  };
  scores.push(score);
  localStorage.setItem("scores", JSON.stringify(scores));
  window.location = "highscores_index.html";
}


function create(questionData)  {
  var createMultiList = document.createElement("ul");
  var createButton = document.createElement("button");
  createButton.id = "answer";
  createButton.textContent = questionData;
  createMultiList.appendChild(createButton);
  createButton.addEventListener("click", answerQuestion);

  questionChoices.appendChild(createMultiList);
  // ulCreate.appendChild(createMultiList);
};

// Attach event listener to start button to call startGame function on click
submitButton.addEventListener("click", saveInitials);
startButton.addEventListener("click", startGame);
