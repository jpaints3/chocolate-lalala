$(window).addEventListener("load", function(){
    $window.alert("Hi, thanks for visiting my site! Although, this page can run on any browser size, it looks best on a browser size of 700x1000.");
});

$(window).addEventListener("load", function startTimer(){
    $(window).alert("Running animation");
    $(window).setInterval(function moveBees(){
        $(".bees").addClass("animate");
    }, 2000);
})