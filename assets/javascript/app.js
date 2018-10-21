//pseudocode
var questions = [{
    "question":"When did Dark Helmet and Lone Starr finally meet?",
        "opt1":"At Princess Vespas's wedding",
        "opt2":"For the first time, for the last time",
        "opt3":"While combing the desert",
        "opt4":"On Uranus",
            "answer":"2",
}, {
    "question":"Princess Vespa can't live without what??",
        "opt1":"Industrial Strength Hair Dryer",
        "opt2":"Her Dot Matrix",
        "opt3":"Her Father King Roland",
        "opt4":"Yogurt",
            "answer":"1",  
}, {
    "question":"How are Dark Helmet and Lone Starr related?",
        "opt1":"Father's Brother",
        "opt2":"Nephew's Cousin",
        "opt3":"Former Roommate",
        "opt4":"Absolutely Nothing",
            "answer":"4",  
}, {
    "question":"What is the combination to the air shield ?",
        "opt1":"8-6-7-5-3-0-9",
        "opt2":"A-B-C-D-E",
        "opt3":"1-2-3-4-5",
        "opt4":"4-4-4-4",
            "answer":"3",  
}]
var videos = [
    "https://i.makeagif.com/media/10-21-2018/x-LY3s.gif",
    "https://i.makeagif.com/media/10-21-2018/A6ql2M.gif",
    "https://i.makeagif.com/media/10-21-2018/p8cZeE.gif",
    "https://i.makeagif.com/media/10-21-2018/1mDuJF.gif",
]

var currentQuestion = 0;
var score = 0;
//pick from the questions array
var totQuestions = questions.length;
//printing on page
var container = document.getElementById("quizContainer");
var question = document.getElementById("question");
var video = document.getElementsByClassName("video");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var wins = document.getElementsByClassName("wins");
var losses = document.getElementsByClassName("losses");
var startButton = document.getElementById("startButton");
var score = document.getElementsByClassName("scoreBoard");
var message = document.getElementsByClassName("message");
var answer = "";
var questionIndex = [0];
var videoIndex = [0];
var currentVideo = 0;
var q = questions[questionIndex];
var v = videos[videoIndex];
wins = 0;
losses = 0;

//create a timer to start 30 seconds
var timeleft = 20;
var intervalId;
// when start timer gets clicked
// $("#startButton").on("click", run);
// $("#stop").on("click", stop);

function run() { //starting the timer
    clearInterval(intervalId); //clearing the interval
    intervalId = setInterval(decrement, 1000);
    timeleft = 20; 
}
function decrement() {
    timeleft--; //counting down
    $("#timer").html(timeleft); //printing to html
    if (timeleft <= 0) {
        stop(); //when hits 0 stop
        console.log('times up');
        losses++;
        $(".losses").text(losses);
        // timesUpMessage();
        $(".video").html($("<img>").attr({"src":"https://media.giphy.com/media/E84LEJ7e0SrYY/giphy.gif"}));
        setTimeout(function() { 
            $(".video").html($("<img>").attr({"src":""}));
            if (currentQuestion !== questions.length) {
                loadQuestion(currentQuestion);   
            } else if (currentQuestion == totQuestions) {
                container.style.display = "none";
                return;
            }
        }, 4000);

        
        currentQuestion++;
        console.log(currentQuestion, "decrement");
    }
}
function stop() { //run the stop function and clear the interval
    clearInterval(intervalId);
}

//press start to start the game
$('#startButton').on("click", function(){
    console.log(event);
    console.log("pushed start button");
    event.preventDefault();
    loadQuestion(currentQuestion);
});
    
//loading the question and answers from the array 
function loadQuestion (questionIndex) {
    console.log("loadQuestion");
    var q = questions[questionIndex];
    console.log(q);
    //print questions and options to the page
    question.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.opt1;
    opt2.textContent = q.opt2;
    opt3.textContent = q.opt3;
    opt4.textContent = q.opt4;
    //reset timer once an object is clicked
    run();
};

$(".option").on("click", function() {
    stop();
    setTimeout(function() { 
        $(".video").html($("<img>").attr({"src":""}));
        if (currentQuestion !== questions.length) {
            loadQuestion(currentQuestion);
        }
    }, 10000);
    var selectedOption = document.querySelector("input[type=radio]:checked");
    answer = selectedOption.value;
    console.log(answer); //answer is being defined
    
    if (questions[currentQuestion].answer == answer) {
        $(".video").html($("<img>").attr("src", videos[currentQuestion]));
        console.log("videos", videos[currentQuestion]);
        wins++;
        $(".wins").text(wins);
        
        // currentVideo++; 
        //go to the next question after the object is clicked
    } else if (questions[currentQuestion].answer !== answer) {
        $(".video").html($("<img>").attr({"src":"https://media.giphy.com/media/l0HlTtfLvP6HfLvH2/giphy.gif"}));      
        losses++;
        $(".losses").text(losses);
    } 

    currentQuestion++;
    console.log(currentQuestion, "onclick");
    //stops allowing clicks after the questions are over. Will delete
    selectedOption.checked = false;

    // show results after last question

    if (currentQuestion == totQuestions) {
        setTimeout(function() {
            container.style.display = "none";
            return;
        }, 10000);  
    }
    
// loadQuestion(currentQuestion) 

})

// function correctMessage(){
//     console.log("correct message");

    // $(".video").append($("<img>").attr(videos[questionIndex]));
    // setTimeout(function() {
    //     loadNextQuestion(currentQuestion);
    // }, 3000);
// }

// function wrongMessage() {
//     console.log("wrong message");
    // losses++;
    // $(".losses").text(losses);
    // $(".video").append($("<img>").attr({"src":"https://media.giphy.com/media/l0HlTtfLvP6HfLvH2/giphy.gif"}));
    // setTimeout(function(wrongMessage) {
    // }, 3000);
    // loadQuestion();
// }

// function timesUpMessage() {
//     console.log("times up");
    // losses++;
    // $(".losses").text(losses);
    // $(".video").append($("<img>").attr({"src":"https://media.giphy.com/media/TCDHJPxeWgTsY/giphy.gif"}));
    // setTimeout(function(timesUpMessage) {
    // }, 3000);
    // loadQuestion();
// }