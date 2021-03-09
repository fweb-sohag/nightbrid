 $('.upcoming_slider').slick({
     slidesToShow: 2,
     slidesToScroll: 2,
     autoplay:true,
     arrows:true,
     prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
     nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",

});

$('.testi_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay:true,
    arrows:true,
    prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
    nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
});
$('.blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
    nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
});


// timer 
$('.time_conter').countdown({
    date: '03/25/2021 23:59:59'
    
 }, 
 function () {
    // alert('Merry Christmas!');
});

$('.testi_bg').parallax({
    imageSrc: 'imges/testbg.jpg',
});

new WOW().init();

$(function(){
    var backToTop = $('.backTotop')
    var html_body = $('html, body');

    //window scroll --
    $(window).scroll(function () { 
        var scrolling = $(this).scrollTop();
        if(scrolling > 200){
            backToTop.fadeIn();
        }else{
            backToTop.fadeOut();
        }
      
        if(scrolling > 80){
            $('.menu_bg').addClass('nav_fix');
        }else{
            $('.menu_bg').removeClass('nav_fix');
        }
    
    });
   
    backToTop.on('click',function(){
        html_body.animate({
            scrollTop:0,
        },1500);
    });

    $('.menu_bg .menu .menu_list a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500,);
                return false;
            }
        }
    });
});

$(document).ready(function(){
    $('.venobox').venobox(); 
});

$(".dj_slider").slick({

    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    centerMode: true,
    centerPadding: "0",
    prevArrow: "<i class='fas fa-chevron-left slick-prev'></i>",
    nextArrow: "<i class='fas fa-chevron-right slick-next'></i>",
});


// // from validity 
// var fname = document.getElementById("#fname");
// var erfname = document.getElementById("erfname");
// var ymail = document.getElementById("ymail");
// var erymail = document.getElementById("erymail");

// function submit(){
//     if(fname.value == ""){
//         fname.style.border  = "1px solid red";
//         erfname.innerHTML = "Please ender your Name";
//         fname.focus();
//         return false;
//     }
//     if(mail.value == ""){
//         ymail.style.border  = "1px solid red";
//         erymail.innerHTML = 'Please enter your valid email';
//         fname.focus();
//         return false;
//     }
// }
// function err(){
//     if(fname.value !="" ){
//         fname.style.border  = "";
//         eryfname.innerHTML = "";
//     }
//     if(ymail.value !=""){
//         ymail.style.border  = "";
//         erymail.innerHTML = "";
//     }
// }
// fname.addEventListener('blur',err);
// ymail.addEventListener('blur',err);