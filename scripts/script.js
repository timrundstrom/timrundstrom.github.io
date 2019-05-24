const unmarked = "#142433";
const marked = "#101C28";
const markedBorder = "#F80652";
const unmarkedBorder = "#222F3F";

$(function(){
    $("#wSection").show();
    $("#wButton").css("border-color", markedBorder);

    $("#wButton").click(function(){
        $(".Btn").removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $("#wSection").show();
        unmarkSection();
        markBtn($("#wButton"));
    });
    $("#pButton").click(function(){
        $(".Btn").removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $("#pSection").show();
        unmarkSection();
        markBtn($("#pButton"));
    });
    $("#gButton").click(function(){
        $(".Btn").removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $("#gSection").show();
        unmarkSection();
        markBtn($("#gButton"));
    });
    $(".Btn").mouseenter(function(){
        $(this).css("background-color", marked);
    });
    $(".Btn").mouseleave(function(){
        if($(this).hasClass("marked") === false){
            $(this).css("background-color", unmarked);
        }
    });

});

function hideSections(){
    $("#wSection").hide();
    $("#pSection").hide();
    $("#gSection").hide();
}
function unmarkSection(){
    $("#wButton").css("background-color", unmarked);
    $("#wButton").css("border-color", unmarkedBorder);
    $("#pButton").css("background-color", unmarked);
    $("#pButton").css("border-color", unmarkedBorder);
    $("#gButton").css("background-color", unmarked);
    $("#gButton").css("border-color", unmarkedBorder);
}
function markBtn($x){
    $x.css("background-color", marked);
    $x.css("border-color", markedBorder);
}