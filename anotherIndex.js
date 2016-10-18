let pageIndex = 0;
let ableClick = true;
setTimeout( 
    function() {
        $("#page0").addClass("visible")
    }, 0);

$("#pageDown").click(
    function() {
        if(!ableClick) {
            return;
        }
        ableClick = false;
        if(pageIndex == 4) {
            $("#page4").removeClass("visible");
            pageIndex = 0;
            $("#page0").addClass("visible");
            return;
        }
        $("#page" + pageIndex).removeClass("visible");
        pageIndex++;
        $("#page" + pageIndex).addClass("visible");
        setTimeout(function() {
            ableClick = true;
        }, 1000);

    }
);

