function startTimer(){
    setInterval(function moveBees(){
        $(".bees").addClass("animate");
    }, 2000);
    setInterval(function moveBack(){
        $(".bees").removeClass("animate");
    }, 3000);
}

window.onload = function(){
    alert("Hi, thanks for visiting my site! Although, this page can run on any browser size, it looks best on a browser size of 1015x765.");
    startTimer();
};

// $(".goals").click(function(){
//     $.scrollTo(".goal-card", 500);
// });