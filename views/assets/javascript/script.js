function startTimer(){
    setInterval(function moveBees(){
        $(".bees").addClass("animate");
    }, 2000);
    setInterval(function moveBack(){
        $(".bees").removeClass("animate");
    }, 3000);
}

window.onload = function(){
    alert("Hi, thanks for visiting my site! Although, this page can run on any browser size, it looks best on a browser size of 1015x765. In addition, the website looks quite clean on phones too.");
    startTimer();
};


var goalCard = document.getElementById("goal-card");
var hobbyCard = document.getElementById("hobbies-card");
var historyCard = document.getElementById("history-card");


function scrollToGoal(){
    goalCard.scrollIntoView();
};
function scrollToHobbies(){
    hobbyCard.scrollIntoView();
};
function scrollToHistory(){
    historyCard.scrollIntoView();
};





