/*let pageIndex = 1;

$(document).ready( function() {
    pageInit();
    //鼠标进入或离开inventory区域，头像发生变化
    $("#skillInventory").click(
        function() {
            showPageUp(".page1", ".page2");
            pageIndex = 2;
        }
    );
    $("#experiences").click(
        function() {
            showPageUp(".page1", ".page3");
            pageIndex = 3;
        }
    );
    $("#smallProjects").click(
        function() {
            showPageUp(".page1", ".page4");
            pageIndex = 4;
        }
    );
    $("#selfAssessment").click(
        function() {
            showPageUp(".page1", ".page5");
            pageIndex = 5;
        }
    );
    $("#pageDown").click(pageDown);
    $("#pageUp").click(pageUp);
});

function pageInit() {
    $("#emiwang").animate({
        "height": "200px",
        "width": "200px",
        "right": "50%",
        "marginRight": "-100px"
    }, "slow");

    $("#personInfo").fadeIn(1000);
}

function showPageUp(pageUpClass, pageDownClass) {
    $(pageUpClass).slideUp("slow");
    $(pageDownClass).css("display", "block");
    $(pageDownClass).slideDown("slow");
}

function showPageDown() {

} 

function pageDown() {
    if(pageIndex == 5) {
        return;
    } else {
        showPageUp(".page" + pageIndex, ".page" + (pageIndex + 1));
        pageIndex += 1;
    }
}

function pageUp() {
    if(pageIndex == 1) {
        return;
    } else {
        showPageUp(".page" + pageIndex, ".page" + (pageIndex - 1));
        pageIndex -= 1;
    }
}*/





