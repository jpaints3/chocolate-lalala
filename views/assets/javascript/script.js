$window.addEventListener("load", function startTimer(){
    $window.setInterval(function moveBees(){
        $(".bees").addClass("animate");
    }, 2000);
})