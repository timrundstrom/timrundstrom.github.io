const unmarked = "#333";
const marked = "#444";
const marked_border = "#f44";
const $ws = $("#wSection");
const $ps = $("#pSection");
const $gs = $("#gSection");
const $wb = $("#wButton");
const $pb = $("#pButton");
const $gb = $("#gButton");
const $Btn = $(".Btn");

$(function(){
    $ws.show();
    $wb.css("border-color", marked_border);

    $wb.click(function(){
        $Btn.removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $ws.show();
        unmarkSection();
        markBtn($wb);
    });
    $pb.click(function(){
        $Btn.removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $ps.show();
        unmarkSection();
        markBtn($pb);
    });
    $gb.click(function(){
        $Btn.removeClass("marked");
        $(this).addClass("marked");
        hideSections();
        $gs.show();
        unmarkSection();
        markBtn($gb);
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
    $ws.hide();
    $ps.hide();
    $gs.hide();
}
function unmarkSection(){
    $wb.css("background-color", unmarked);
    $wb.css("border-color", "black");
    $pb.css("background-color", unmarked);
    $pb.css("border-color", "black");
    $gb.css("background-color", unmarked);
    $gb.css("border-color", "black");
}
function markBtn($x){
    $x.css("background-color", marked);
    $x.css("border-color", marked_border);
}