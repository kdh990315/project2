$(function () {

    $('.slide1').click(function () {
        $('#schedul_total_box1').fadeIn();
        $('#schedul_total_box2').hide();
        $('#schedul_total_box3').hide();
        $('#schedul_total_box4').hide();
        $('#schedul_total_box5').hide();
    });

    $('.slide2').click(function () {
        $('#schedul_total_box1').hide();
        $('#schedul_total_box2').fadeIn();
        $('#schedul_total_box3').hide();
        $('#schedul_total_box4').hide();
        $('#schedul_total_box5').hide();
    });

    $('.slide3').click(function () {
        $('#schedul_total_box1').hide();
        $('#schedul_total_box2').hide();
        $('#schedul_total_box3').fadeIn();
        $('#schedul_total_box4').hide();
        $('#schedul_total_box5').hide();
    });

    $('.slide4').click(function () {
        $('#schedul_total_box1').hide();
        $('#schedul_total_box2').hide();
        $('#schedul_total_box3').hide();
        $('#schedul_total_box4').fadeIn();
        $('#schedul_total_box5').hide();
    });

    $('.slide5').click(function () {
        $('#schedul_total_box1').hide();
        $('#schedul_total_box2').hide();
        $('#schedul_total_box3').hide();
        $('#schedul_total_box4').hide();
        $('#schedul_total_box5').fadeIn();
    });

});

