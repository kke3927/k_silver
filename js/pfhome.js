const main_title_text = "신입 백엔드 개발자 \n 강경은의 포트폴리오입니다.";
const main_title = document.querySelector(".main_title");
let i = 0;
function typing(){
    let txt = main_title_text[i++];
    main_title.innerHTML += txt==="\n"?"<br/>":txt;
    if(i>main_title_text.length){
        main_title.innerHTML="";
        i=0;
    }
}
setInterval(typing, 200);

/* 스킬 바 append */
let skill_bar = document.querySelectorAll('.skill_bar');
function loadBar(value, target){
    for(let i=0;i<value;i++){
        let addDiv=document.createElement('div');
        addDiv.className='skill_value';
        target.appendChild(addDiv);
    }
}
loadBar(9, skill_bar[0]);//html
loadBar(9, skill_bar[1]);//css
loadBar(8, skill_bar[2]);//js
loadBar(9, skill_bar[3]);//jq
loadBar(7, skill_bar[4]);//java
loadBar(7, skill_bar[5]);//sql
loadBar(8, skill_bar[6]);//spring
loadBar(8, skill_bar[7]);//ajax


/////////////////

$(document).ready(function(){
    let container = $('.container');
    let offset_array=new Array(container.length);
    for(let i=0;i<offset_array.length;i++){
        offset_array[i]=container.eq(i).offset().top;
    }
    let menu_li_array = new Array($('.menu_tap > li').length);
    for(let i=0;i<menu_li_array.length;i++){
        menu_li_array[i]=$('.menu_tap > li').eq(i).text();
    }

    function addArrow() {
        for(let i=0;i<menu_li_array.length;i++){
            if($(window).scrollTop() >= offset_array[i]){
                console.log(i)
                $('.menu_tap > li').eq(i+1).text(menu_li_array[i+1]);
                $('.menu_tap > li').eq(i).text("〉 " + menu_li_array[i]);
                $('.menu_tap > li').eq(i-1).text(menu_li_array[i-1]);
            }
        }
    }
    $(window).scroll(function(){
        let scroll=$(window).scrollTop();
        addArrow();
    })
})