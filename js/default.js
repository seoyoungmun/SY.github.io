$(window).scroll(function(){
    if($(document).scrollTop()>0){
            $('.main-header-wrap').addClass('on');
    } else if($(document).scrollTop()==0){
        $('.main-header-wrap').removeClass('on');
    }
})

//navigation
$('.navbar-toggle').click(function(){
                          if($('.icon-bar').hasClass('on')){
                          $('.navbar-bg').animate({'right':'-195px'},1000);
                          $('.icon-bar').removeClass('on');
                          $('.ib01').fadeIn('fast');
                          } else {
                          $('.navbar-bg').animate({'right':0},1000);
                          $('.ib01').fadeOut('fast');
                          $('.icon-bar').addClass('on');
                          }
                          });

/*popup*/
$('.col>a').click(function(){
                  $(this).parents().next().show();
                  $('body').css({overflow:'hidden'});
                  var pop_height = $(this).parents().next().find('.pop_contents').children('img').height();
$('.pop_in').css({'height':'auto'});
                  $('.pop_in').css({'height':pop_height});
                  $(window).resize(function(){
                                   $('.pop_in').css({'height':pop_height});
                                   })

                  return false;
                  })
$('.close, .pop>.pop_in, .pop>.pop_contents>img').click(function(){
                        $('.pop').hide();
                        $('body').css({overflowY:'scroll'});
                        return false;
                        })

//특정영역까지 부드럽게 움직이는 효과
$('.navbar-nav>li>a, .top_btn>a').click(function(e){
                        e.preventDefault();
                        var $achor=$(this);
                        $('html,body').stop().animate({scrollTop:$($achor.attr('href')).offset().top},1250)
                        })

$('.skills').mouseenter(function(){
                        $('.per85').stop().animate({'stroke-dashoffset':'80'},1200);
                        $('.per95').stop().animate({'stroke-dashoffset':'27'},1200);
                        $('.per70').stop().animate({'stroke-dashoffset':'160'},1200);
                        })
$('.skills').mouseleave(function(){
                        $('.outer').stop().animate({'stroke-dashoffset':'534'},1200);
                        })

$('.chainFadeIn').chainFade({
    toThe: 'right',
    speed: 1000,
    interval: 750
});
