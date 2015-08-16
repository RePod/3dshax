//If we ever need it, it's already here.
//No object literals here, officer.

$(document).ready(function() {
    var UA = navigator.userAgent,
        THREEDS = (UA.indexOf("3DS") > -1) ? true : false, //Cannot possibly fail.
        HASH = window.location.hash;

    //Auto-toggle.
    if (HASH.length > 0)
        toggle(HASH);

    if (THREEDS) {
        var browser_ver = parseFloat(UA.match(/Version\/([\d\.]+)\./).pop());

        $("a[id^='m_']").find("img").addClass("bad_browser");

        if (browser_ver < 1.7585) {
            //Anything before 9.5, last being 7.1 I think. Not worth checking otherwise.
            $("#cubic, #cubic2").find("img").addClass("good_browser");
        }
        if (browser_ver >= 1.7585) {
            //9.5 to 9.8
            $("#m_cubic2").find("img").addClass("good_browser");
            $("#m_ironfall").find("img").addClass("good_browser");
        }
        if (browser_ver >= 1.7610) {
            //9.9, most likely.
            $("#m_ironfall").find("img").addClass("good_browser");
        }
    }

    //Bind selections to toggle content.
    //Could do this via Bootstrap without additonal code but eh.
    $("a[id^=m_]").click(function () {
        var s = "#" + $(this).attr("id").split("_").pop();

        toggle(s);
    });

    function toggle(s) {
        //Fancy transitions don't work well because of browser responsiveness.

        if ($(s).length > 0) { //Verify the selector exists so people can't accidentally send garbage through.
            if (s) {
                $("#main").hide();
                $(".method:not(" + s + ")").hide();
                $(s).show();
            } else {
                $("#main").show();
                $(".method").hide();
            }
        }
    }
});
