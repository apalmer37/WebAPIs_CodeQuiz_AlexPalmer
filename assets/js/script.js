
// Variable for questions, choices, and answers
var quizQuestions = [
    {
        title: "The inventor of JavaScript is ___:",
        choices: ["Bill Gates", "Hakon Wium Lie", "Brendan Eich", "Mark Zuckerberg"],
        answer: "Brendan Eich" 
    },
    {
        title: "The inventor of JavaScript is ___:",
        choices: ["Bill Gates", "Hakon Wium Lie", "Brendan Eich", "Mark Zuckerberg"],
        answer: "Brendan Eich" 
    },
    {
        title: "The inventor of JavaScript is ___:",
        choices: ["Bill Gates", "Hakon Wium Lie", "Brendan Eich", "Mark Zuckerberg"],
        answer: "Brendan Eich" 
    },
    {
        title: "The inventor of JavaScript is ___:",
        choices: ["Bill Gates", "Hakon Wium Lie", "Brendan Eich", "Mark Zuckerberg"],
        answer: "Brendan Eich" 
    },
    {
        title: "The inventor of JavaScript is ___:",
        choices: ["Bill Gates", "Hakon Wium Lie", "Brendan Eich", "Mark Zuckerberg"],
        answer: "Brendan Eich" 
    },
];
// variables
var questionList = 0;
var quizScore = 0;
// declaring variables from index.html id's
var timer = document.querySelector("#timer");
var startButton = document.querySelector("#startButton");
var quizDiv = document.querySelector("#quizDiv");
var wrapper = document.querySelector("#wrapper");
// total time for quiz is 90 seconds
var secondsLeft = 90;
// interval time
var holdInterval = 0;
// wrong answer penalty time
var wrongPenalty = 10;
// creating a new element
var ulCreate = document.createElement("ul");

// adding event to startButton to start the timer and quiz
startButton.addEventListener("click", function() {
    if(holdInterval === 0) {
        holdInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            allDone();
            timer.textContent = "Time has expired";
        }
        }, 1000);
    }
    render(questionList);
});

// adds questions and choices 
function render(questionList) {
    // must clear quizDiv page
    quizDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < quizQuestions.length; i++) {
        // adds title
        var userQuestion = quizQuestions[questionList].title;
        var userChoices = quizQuestions[questionList].choices;
        quizDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quizDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// event to check for correct answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // if correct
        if (element.textContent == quizQuestions[questionList].answer) {
            quizScore++;
            createDiv.textContent = "Correct"
        // if incorrect
        } else {
            // deduct 10 seconds for wrongPenalty
            secondsLeft = secondsLeft - wrongPenalty;
            createDiv.textContent = "Wrong"
        }
    }
    // go through questionList
    questionList++

    if (questionList >= quizQuestions.length) {

        allDone();
        createDiv.textContent = "Finished! You answered " + ((quizScore/quizQuestions.length)*100) + "% of the questions correct.";
    } else {
        render(questionList);
    }
    quizDiv.appendChild(createDiv);

}
// all done will take us to the results page
function allDone() {
    quizDiv.innerHTML = "";
    timer.innerHTML = "";


    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createP");
    createH1.textContent = "Quiz Complete"

    quizDiv.appendChild(createH1);


    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    quizDiv.appendChild(createP);

    // replaces the timer with the final score
    if (secondsLeft >= 0) {
        var finalScore = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Final score: " + finalScore;

        quizDiv.appendChild(createP2);
    }

    // enter initials label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    quizDiv.appendChild(createLabel);

    // enter initials input
    var initialsInput = document.createElement("input");
    initialsInput.setAttribute("type", "text");
    initialsInput.setAttribute("id", "initials");
    initialsInput.textContent = "";

    quizDiv.appendChild(initialsInput);

    // created submit button
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    quizDiv.appendChild(createSubmit);

}


