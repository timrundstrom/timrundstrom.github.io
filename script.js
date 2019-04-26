const unmarked = "#142433";
const marked = "#101C28";
const marked_border = "#F80652";
const unmarked_border = "#222F3F";
const $ws = $("#wSection")
const $ps = $("#pSection")
const $gs = $("#gSection")
const $wb = $("#wButton")
const $pb = $("#pButton")
const $gb = $("#gButton")

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
    $wb.css("border-color", unmarked_border);
    $pb.css("background-color", unmarked);
    $pb.css("border-color", unmarked_border);
    $gb.css("background-color", unmarked);
    $gb.css("border-color", unmarked_border);
}
function markBtn($x){
    $x.css("background-color", marked);
    $x.css("border-color", marked_border);
}