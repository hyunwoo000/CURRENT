$(document).ready(function(){
    media();
    //반응형 사이즈 변경 시 스크립트 제거
    function media(){
        const ww = $(window).width();

        if(ww >= 1200){
            //스와이퍼
            var swiper = new Swiper('.mySwiper',{
                effect:"fade",
                loop: true,
                autoplay:{
                    delay:2500,
                    disableOnInteraction:false
                },
                navigation:{
                    nextEl:".swiper-button-next",
                    prevEl:".swiper-button-prev"
                }
            });

        }else{

        }
    }
    //헤더 스크롤 이벤트
    $(window).scroll(function(){
        const sct = $(window).scrollTop();
        if(sct >= 200){
            $('.header-area').addClass('active');
            $('.header-logo').addClass('active');
            $('.menu-btn').css({
                width:30,
                height:20
            });
            $('.menu-btn span').css({
                'background-color':'#000'
            });
        }else{
            $('.header-area').removeClass('active');
            $('.header-logo').removeClass('active');
            $('.menu-btn').css({
                width:40,
                height:25
            });
            $('.menu-btn span').css({
                'background-color':'#fff'
            });
        }
    });

    // 메뉴 버튼 누르면 햄버거 버튼 돌아가게 만들고 배경(사이드메뉴) 나오게 처리
    $('.menu-btn').click(function(){
        $('.menu-btn').toggleClass('active');
        $('.menu-btn span:nth-child(1)').toggleClass('active');
        $('.menu-btn span:nth-child(2)').toggleClass('active');

        //토글클래스가 같은 전제(이벤트)에 두개이상 사용하는 경우 엇갈릴 수 있는 가능성이 크다 그렇기 때문에 왠만해서 사용하지 않는 것이 좋음
        //hasClass 사용해보기
        if($('.menu-btn').hasClass('active')){
            $('.menu-btn').addClass('active');
        }else{
            $('.menu-btn').removeClass('active');
        }
    });



});//end