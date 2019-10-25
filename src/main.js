const navbarScroll = (scrollTop) => {
    $('html, body').animate({
        scrollTop: scrollTop
    }, 1300);
}
  
$(document).ready(() => {
    $('#bg').animate({height: `1000px`}, 1500);
    $('#bg-text').animate({opacity: 1}, 1000);
});

$('#nav-btn').click(() => {
    navbarScroll(0);
});
  
$('#info-button').click(() => {
    navbarScroll($('#general-info-block').offset().top - 200);
});
  
$('#more-info-button').click(() => {
    navbarScroll($('#general-info-block').offset().top - 200);
});
  
$('#gallery-button').click(() => {
    navbarScroll($('#gallery-block').offset().top - 200);
});
  
$('#order-button').click(() => {
    navbarScroll($('#order-block').offset().top);
});
  
$(window).scroll(() => {
    let scrollTop = $(window).scrollTop();
    
    if (scrollTop > $('#bg').height()/4) {
        $('#header').animate({opacity: `1`}, 1500)
    }
  
    if (scrollTop > $('#general-info-block').offset().top/2 && $('#bg').height() > $('#bg').height()/2) { 
        $('#general-info-block').animate({opacity: 1}, 1000);
  
        $('#first-info').animate({
            opacity: 1,
            right: '0px'
        }, 2000);
  
        setTimeout(() => {
            $('#gallery').animate({
                opacity: 1,
                left: '0px'
            }, 2000);
    
        }, 1000)
    }

    if (scrollTop > $('#gallery-block').offset().top - 350) {
        for (let i = 1; i < 9; i++) {
            $(`#img-${i} img`).animate({
                opacity: 1 
            }, 1000*(i/2));
        }
    }

    if (scrollTop > $('#order-block').offset().top - 350) {
        $("#order").animate({opacity: 1}, 1000);
    }
});

  