$(document).ready(function(){

//main tab

$('ul.main__tabs').on('click', 'li:not(.main__logo)', 'li:not(.main__tab_active)', function() {
    $(this)
        .addClass('main__tab_active').siblings().removeClass('main__tab_active')
        .closest('body').find('.main__content').removeClass('main__content_active').eq($(this).index()).addClass('main__content_active');
    });


$('ul.price__tabs').on('click', 'li:not(.price__tab_active)', function() {
    $(this)
        .addClass('price__tab_active').siblings().removeClass('price__tab_active')
        .closest('div.price').find('.price__content').removeClass('price__content_active').eq($(this).index()).addClass('price__content_active');
    });


	/* This is basic - uses default settings */
	
    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });
});

//Background changer
$('.main__tab').on('click' , function() {
    $('div.main').css({
        "background" : "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('../img/bg/"+$(this).attr("id")+".jpg') center center/cover no-repeat"
    })


});

new WOW().init();

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.main__tabs__wrapper'),
    menuItem = document.querySelectorAll('.main__tab'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('main__tabs__wrapper-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('main__tabs__wrapper-active');
        })
    })

});

var hammertime = new Hammer(document.body, {
    enable: true,
    recognizers: [
        [Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]
    ]
});

hammertime.on('swipeleft', function(ev) {
    if( $('.hamburger').hasClass('hamburger-active')) {
        $('.hamburger').removeClass('hamburger-active');
        $('.main__tabs__wrapper').removeClass('main__tabs__wrapper-active');

    }
});
