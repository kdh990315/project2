
$(function () {

    // 클릭시 테두리 구현
    $('.ticket label').click(function () {
        $('.ticket label').removeClass('active');
        $(this).addClass('active');

    });


    // 이용권 선택시 구매창 구현
    $('.bas').click(function () {
        $(".Basic").fadeIn();
        $(".Standard").hide();
        $(".Premium").hide();
        $(".FLO").hide();
        $(".Bugs").hide();
        $(".KB").hide();
    });

    $('.sta').click(function () {
        $(".Basic").hide();
        $(".Standard").fadeIn();
        $(".Premium").hide();
        $(".FLO").hide();
        $(".Bugs").hide();
        $(".KB").hide();
    });

    $('.pre').click(function () {
        $(".Basic").hide();
        $(".Standard").hide();
        $(".Premium").fadeIn();
        $(".FLO").hide();
        $(".Bugs").hide();
        $(".KB").hide();
    });

    $('.xflo').click(function () {
        $(".Basic").hide();
        $(".Standard").hide();
        $(".Premium").hide();
        $(".FLO").fadeIn();
        $(".Bugs").hide();
        $(".KB").hide();
    });

    $('.xbug').click(function () {
        $(".Basic").hide();
        $(".Standard").hide();
        $(".Premium").hide();
        $(".FLO").hide();
        $(".Bugs").fadeIn();
        $(".KB").hide();
    });

    $('.xkb').click(function () {
        $(".Basic").hide();
        $(".Standard").hide();
        $(".Premium").hide();
        $(".FLO").hide();
        $(".Bugs").hide();
        $(".KB").fadeIn();
    });
});
