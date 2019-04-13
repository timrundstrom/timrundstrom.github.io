const unmarked = "#333";
const marked = "#444";
const marked_border = "#f44";
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
        hideSections();
        $ws.show();
        unmarkSection();
        markBtn($wb);
    });
    $pb.click(function(){
        hideSections();
        $ps.show();
        unmarkSection();
        markBtn($pb);
    });
    $gb.click(function(){
        hideSections();
        $gs.show();
        unmarkSection();
        markBtn($gb);
    });
});

function hideSections(){
    $ws.hide();
    $ps.hide();
    $gs.hide();
}
function unmarkSection(){
    // for loop for easier readability?
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