//pseudocode
var questions = [{
    "question":"When did Dark Helmet and Lone Starr finally meet?",
        "opt1":"At Princess Vespas's wedding",
        "opt2":"For the first time, for the last time",
        "opt3":"While combing the desert",
        "opt4":"On Uranus",
            "answer":"2",
            // "message": url
}, {
    "question":"Princess Vespa can't live without what??",
        "opt1":"Industrial Strength Hair Dryer",
        "opt2":"Her Dot Matrix",
        "opt3":"Her Father King Roland",
        "opt4":"Yogurt",
            "answer":"1",
                "message":"url, https://youtu.be/0f5y1w7sZ0s"  
}, {
    "question":"How are Dark Helmet and Lone Starr related?",
        "opt1":"Father's Brother",
        "opt2":"Nephew's Cousin",
        "opt3":"Former Roommate",
        "opt4":"Absolutely Nothing",
            "answer":"4",  
}, {
    "question":"What are the two sides of every schwartz?",
        "opt1":"The left and the right",
        "opt2":"The good and the evil",
        "opt3":"The upside and the downside",
        "opt4":"The inside and the outside",
            "answer":"3",  
}]


var currentQuestion = 0;
var score = 0;
//pick from the questions array
var totQuestions = questions.length;
//printing on page
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var wins = document.getElementsByClassName("wins");
var losses = document.getElementsByClassName("losses");
var startButton = document.getElementById("startButton");
var nextButton = document.getElementById("nextButton");
var score = document.getElementsByClassName("scoreBoard");
var message = document.getElementsByClassName("message");
wins = 0;
losses = 0;

//create a timer to start 30 seconds
var timeleft = 30;
// var that will hold setInterval that runs the timer
var startTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0)
        // $(".trivia")
        // have it stop at 0
        clearInterval(startTimer);
        console.log("timeleft");
},1000);

//press start to start the game
$('#startButton').on("click", function(){
    timeleft = 31;
    console.log(event);
    event.preventDefault();
    loadQuestion(currentQuestion);
    
});
    
    

//loading the question and answers from the array 
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    console.log(q.opt1);
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    console.log(opt1);
    opt1.textContent = q.opt1;
    opt2.textContent = q.opt2;
    opt3.textContent = q.opt3;
    opt4.textContent = q.opt4;
    timeleft = 31;
};

//TODO: correct or incorrect page needed

//loading the next question and answers after the last one was answered
function loadNextQuestion () {
  
    //verifying the checked radio button to the number in the array
    var selectedOption = document.querySelector("input[type=radio]:checked");
    var answer = selectedOption.value;
    //if right add one to the score, compare the answer with the array
    if (questions[currentQuestion].answer == answer) {
        wins++;
        $(".wins").text(wins);
        console.log(answer);
        // function message() {
        //     $(".message").append($("<img>").attr({"src":"https://youtu.be/0f5y1w7sZ0s"}));
        //     setTimeout(function() {
        //         loadQuestion(currentQuestion);
        //     }, 5000);
        // }
        // $(".message").text("correct answer");
        //correct page;
    } else if (questions[currentQuestion].answer !== answer) {
        losses++;
        $(".losses").text(losses);
        console.log("lost");
        wrongMessage();
        
        //goes to wrong page;
    }
    //stops allowing clicks after the questions are over. Will delete
    selectedOption.checked = false;
    currentQuestion++;

    //show results after last question
    if (currentQuestion == totQuestions) {
        container.style.display = "none";
        return;
    }

    // loadQuestion(currentQuestion);
}
$(".option").on("click", function() {
    loadNextQuestion(currentQuestion);

})
// function correctMessage(){
//     $(".message").append($("<img>").attr({"src": }))
// }
function wrongMessage() {
    $(".message").append($("<img>").attr({"src":"https://media.giphy.com/media/33bpFN25l6qNW/giphy.gif"}));
    setTimeout(function() {
        loadQuestion(currentQuestion);
    }, 5000);
}


//timer to reset with new question
//after correct answer get yay page
//after incorrect answer get boo page
//clear from the yay or boo page after 5 seconds to the new question

