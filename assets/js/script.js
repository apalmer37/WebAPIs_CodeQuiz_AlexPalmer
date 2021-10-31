var renQuestions = document.querySelector("#questions");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var questionNum = 0;

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
      // Tests if win condition is met
      // else if (timerCount > 0) {
      //   // Clears interval and stops timer
      //   clearInterval(timer);
      // };
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // loseGame();
    }
  }, 1000);
}


// renders quiz questions
function render() {
  // renQuestions.innerHTML = quizQuestions;
  var currQuestion = quizQuestions[questionNum];
  questionTitle.textContent = currQuestion.question;
  $("#questions").removeClass("hide");
  $("#start-screen").addClass("hide");
  for (let i = 0; i < currQuestion.multiChoices.length; i++) {
    create(currQuestion.multiChoices[i].button);
  }
  // let showMulti = quizQuestions.multiChoices;
  // document.write([quizQuestions[0]]);
}

function create(questionData)  {
  var createMultiList = document.createElement("ul");
  var createButton = document.createElement("button");
  createButton.id = "answer";
  createButton.textContent = questionData;
  createMultiList.appendChild(createButton);

  questionChoices.appendChild(createMultiList);
  // ulCreate.appendChild(createMultiList);
};
// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);
document.querySelector("#answer").addEventListener("click", answerQuestion)
// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });



// Calls init() so that it fires when page opened
// init();

// Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// Attaches event listener to button
// resetButton.addEventListener("click", resetGame);






// // track correct answers
// //let correctAnswers = 0;

// var startButton = document.getElementById('start');




// // array's for multiple choice answers
// // create event listener for a click to hide list-container


// //     // declare variable listContainer and assign it to the class list-container in the html
// //     const listContainer = document.querySelector('.list-container');
// // //document.querySelector('section').insertAdjacentElement('beforeend', 'quizHtml');

// // const corAnswers = [multiChoices[0][0], multiChoices[1][0], multiChoices[2][2], multiChoices[3][1]];

// var myTimer;
// var timerCount;

// function startGame() {
//     timerCount = 90;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     //renderQuestions()
//     startTimer()
//   }

    
//     function startTimer() {
//         myTimer = setInterval(myClock, 1000);
//         var startTime = 90;
        
//         function myClock() {
//             document.getElementById("timer").innerHTML = --startTime;
//             if (startTime === 0) {
//                 clearInterval(myTimer);
//                 document.getElementById("timer").innerHTML = "Time is up!";
//             }
//         }
//     }
//     startTimer();
//     function end() {
//         clearInterval(myTimer)
//     }
//     end();





// //function 
// function render(_questionList) {
//     let items = '';
//     for (let i = 0; i < arr.length; i++) {
//       items += `<li>${arr[i]}</li>`;
//     }
//     return items;
//   }

// let html = `
//     <h1> You got ${correctAnswers} questions(s) correct</h1>
//     <h2>You got these questions correct:</h2>
//     <ol>${createListItems(correctArr)}</ol>

//     <h2>You got these questions incorrect:</h2>
//     <ol>${createListItems(incorrectArr)}</ol>
// `;

// document.querySelector('main').innerHTML = html;

  
