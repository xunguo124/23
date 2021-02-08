setTimeout(treebarfct, 1000);
function treebarfct() {
    $("[fgcname='treebar']").css("display", "block");
    $("[fgcname='treebar']").css("z-index", "999");
    $("[fgcname='treebar']").mouseleave(function () {
        $("[fgcname='treebar']").animate({ left: "0px", width: "75px" }, 300);
    });
    var value = parseFloat($("[fgcname='treebar']").height());
    var readmore = document.createElement('div');
    readmore.setAttribute('id', 'toucharea');
    readmore.style.width = "90px";
    readmore.style.height = value+'px';
    readmore.style.zIndex = '1';
    readmore.style.position = "absolute";
    readmore.style.display = "block";
    readmore.style.left = '0px';
    readmore.style.top = '0px';
    readmore.style.background = 'rgba(5,15,55,0)';
    readmore.onmouseover = function () {
        $("[fgcname='treebar']").animate({ left: "0px", width: "200px" }, 300);
    };
    $("[fgcname='treebar']").after(readmore);
}
