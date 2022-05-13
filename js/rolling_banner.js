// <!-- rolling-banner 영화 이미지 슬라이드 -->

var banner_left = 0;
var img_cnt = 0;
var first = 1;
var last;
var interval;

$(document).ready(function () {
    $(".rb").each(function () {
        $(this).css("left", banner_left);
        banner_left += $(this).width() + 100;
        $(this).attr("id", "content" + (++img_cnt));
    });

    last = img_cnt;
    startAction();

    $(".content").hover(
        function () { stopAction(); },
        function () { starAction(); });
});

function startAction() {
    interval = setInterval(function () {
        $(".rb").each(function () {
            $(this).css("left", $(this).position().left - 1);
        });

        var first_content = $("#content" + first);
        var last_content = $("#content" + last);

        if (first_content.position().left < "-" + $(first_content).width()) {
            first_content.css("left", last_content.position().left + last_content.width() + 100);
            first++;
            last++;
            if (last > img_cnt) { last = 1; }
            if (first > img_cnt) { first = 1; }
        }

    }, 10);
}