$(function () {

    $(window).scroll(function () {
        var ws = $(this).scrollTop();

        if (0 < ws < 969) {
            $('.p2_ani').css("transform", "translateY(-100px)").css("opacity", "0");
            $('.p3_ani').css("transform", "translateY(-500px)").css("opacity", "0");
            $('.p4_ani').css("transform", "translateY(-500px)").css("opacity", "0");
        }

        if (968 < ws) {
            $('.p2_ani').css("transform", "translateY(0px)").css("opacity", "1");
            $('.p3_ani').css("transform", "translateY(-500px)").css("opacity", "0");
            $('.p4_ani').css("transform", "translateY(-500px)").css("opacity", "0");
        }

        if (1937 < ws) {
            $('.p3_ani').css("transform", "translateY(0px)").css("opacity", "1");
            $('.p2_ani').css("transform", "translateY(-100px)").css("opacity", "0");
            $('.p4_ani').css("transform", "translateY(-500px)").css("opacity", "0");
        }

        if (2898 < ws) {
            $('.p4_ani').css("transform", "translateY(0px)").css("opacity", "1");
            $('.p2_ani').css("transform", "translateY(-100px)").css("opacity", "0");
            $('.p3_ani').css("transform", "translateY(-500px)").css("opacity", "0");
        }

        if (13875 < ws) {
            $('.p2_ani').css("transform", "translateY(-100px)").css("opacity", "0");
            $('.p3_ani').css("transform", "translateY(-500px)").css("opacity", "0");
            $('.p4_ani').css("transform", "translateY(-500px)").css("opacity", "0");
        }
    });
});