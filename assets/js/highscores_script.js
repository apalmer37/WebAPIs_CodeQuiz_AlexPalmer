var highscores = document.querySelector("#highscores");
var clearScoresButton = document.querySelector("#clear");

function getInitials() {
    var scores = JSON.parse(localStorage.getItem("scores"));
    for (let i = 0; i < scores.length; i++) {
        var newInitials = document.createElement("li");
        newInitials.textContent = `${scores[i].initials} - ${scores[i].score}`;
        highscores.appendChild(newInitials);
    }
}

function clearScores(){
    localStorage.setItem("scores", "[]");
    highscores.innerHTML = "";
}



getInitials();
clearScoresButton.addEventListener("click", clearScores);

