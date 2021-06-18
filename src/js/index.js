$(document).ready(function () {
    const html = $('html')
    const mode = $('.label');
    const img = $('.nav-logo img')
    mode.on('click', function () {
        html.toggleClass('dark-theme')
        var src = ($(img).attr("src") === "./img/logo.png") ? "./img/logo-white.png" : "./img/logo.png";
        $(img).attr("src", src);
    })
    const width = $('header').width();
    if (width < 577) {
        $('.hamburger').css('display','block')
        $('.nav-logo img').attr("src", "./img/mobile-logo.png");
    }else{
        $('.hamburger').css('display','none')
        $('.nav-logo img').attr("src", "./img/logo.png");
    }

    $('.hamburger').on('click', function(){
        $('nav').toggleClass('active');
    })
    $('.close').on('click', function(){
        $('.nav').removeClass('.active')
    })
})

