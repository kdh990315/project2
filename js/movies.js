$(function () {

    // 드라마장르
    $('.prev').click(function () {
        $('.movieslist .movbox:last').prependTo('.movieslist');
        $('.movieslist').css('margin-left', -319.5);
        $('.movieslist').stop().animate({ marginLeft: 0 }, 300)
    });

    $('.next').click(function () {
        $('.movieslist').stop().animate({ marginLeft: -319.5 }, 300, function () {
            $('.movieslist  .movbox:first').appendTo('.movieslist');
            $('.movieslist').css({ marginLeft: 0 });
        });
    });

    // 스릴러장르
    $('.thprev').click(function () {
        $('.thmovieslist .thmovbox:last').prependTo('.thmovieslist');
        $('.thmovieslist').css('margin-left', -319.5);
        $('.thmovieslist').stop().animate({ marginLeft: 0 }, 300)
    });

    $('.thnext').click(function () {
        $('.thmovieslist').stop().animate({ marginLeft: -319.5 }, 300, function () {
            $('.thmovieslist  .thmovbox:first').appendTo('.thmovieslist');
            $('.thmovieslist').css({ marginLeft: 0 });
        });
    });

    // 외국 영화 인기 콘텐츠
    $('.usaprev').click(function () {
        $('.usamovieslist .usamovbox:last').prependTo('.usamovieslist');
        $('.usamovieslist').css('margin-left', -319.5);
        $('.usamovieslist').stop().animate({ marginLeft: 0 }, 300)
    });

    $('.usanext').click(function () {
        $('.usamovieslist').stop().animate({ marginLeft: -319.5 }, 300, function () {
            $('.usamovieslist  .usamovbox:first').appendTo('.usamovieslist');
            $('.usamovieslist').css({ marginLeft: 0 });
        });
    });

    // 외국 새로운 영화
    $('.newprev').click(function () {
        $('.newlist .newbox:last').prependTo('.newlist');
        $('.newlist').css('margin-left', -319.5);
        $('.newlist').stop().animate({ marginLeft: 0 }, 300)
    });

    $('.newnext').click(function () {
        $('.newlist').stop().animate({ marginLeft: -319.5 }, 300, function () {
            $('.newlist  .newbox:first').appendTo('.newlist');
            $('.newlist').css({ marginLeft: 0 });
        });
    });
});