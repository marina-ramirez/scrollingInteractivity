// Nav Menu click functionality

$("a").click(function(){
    var idVal = $(this).attr("href");
    $("html, body").animate({
        'scrollTop':$(idVal+"Section").offset().top
    },300)
    $(".navWrapper").toggleClass("toggle");
});

$(".burgerTray").click(function(){
    $(".navWrapper").toggleClass("toggle");
});

// Cover1
var cover1 = $("<div class='popUp1'></div>");
cover1.hide();
$("body").append(cover1);
$("#prjct1").click(function(){
    cover1.show();
    $("body").append(cover1);
})
cover1.click(function(){
    cover1.hide();
    $("body").append(cover1);
});

// Cover2
var cover2 = $("<div class='popUp2'></div>");
cover2.hide();
$("body").append(cover2);
$("#prjct2").click(function(){
    cover2.show();
    $("body").append(cover2);
})
cover2.click(function(){
    cover2.hide();
    $("body").append(cover2);
});

// Cover3
var cover3 = $("<div class='popUp3'></div>");
cover3.hide();
$("body").append(cover3);
$("#prjct3").click(function(){
    cover3.show();
    $("body").append(cover3);
})
cover3.click(function(){
    cover3.hide();
    $("body").append(cover3);
});