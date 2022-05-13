$(function () {
    function slide() {
        $('.slide').stop().animate({ marginLeft: -270 }, 1990, function () {
            $('.slide div:first').appendTo('.slide');
            $('.slide').css({ marginLeft: 0 });
        });
    }
    setInterval(slide, 3000)
});
/**
* marginLeft = img width+margin+imgbox margin-left
.css({marginLeft=imgbox margin-left}) box 초기값으로 돌아올 때**/