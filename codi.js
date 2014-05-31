
var count = 4;

$(function(){
    var windowH = window.innerHeight;
    console.log(windowH);
    var wrapperH = $('#main').height();
    $('#main').height(windowH);
    $('#gridMap').height(windowH);
    
    var i1 = new Image();
    i1.src = "images/intro/i1.jpg";
    var i2 = new Image();
    i2.src = "images/intro/i2.jpg";
    var i3 = new Image();
    i3.src = "images/intro/i3.jpg";
    var i4 = new Image();
    i4.src = "images/intro/i4.jpg";
    var i5 = new Image();
    i5.src = "images/intro/i5.jpg";
    
    var items = document.getElementsByClassName("grid_item");
    for(var i = 0;i<7;i++){
        items[i].style.backgroundImage = "url(images/t"+i+".jpg)";
        items[i].style.backgroundSize = "cover";
        items[i].style.backgroundRepeat = "no-repeat";
    }
    
    var audio = document.getElementsByTagName("audio")[0];
    audio.addEventListener("timeupdate",function(){
        if(audio.currentTime>0 && audio.currentTime<2){
            $("#subtitle").text("My name is Bernard");
        }else if(audio.currentTime>2 && audio.currentTime<4){
            $("#subtitle").text("This is my street");
        }else if(audio.currentTime>4 && audio.currentTime<7){
            $("#subtitle").text("3 weeks ago this poster arrived");
        }else if(audio.currentTime>7 && audio.currentTime<10){
            $("#subtitle").text("Nobody asked me. I don't like it.");
        }else if(audio.currentTime>10 && audio.currentTime<12){
            $("#subtitle").text("I'd prefer, say, Van Gogh...");
            $(".bgi").eq(4).fadeOut();
        }else if(audio.currentTime>12 && audio.currentTime<14){
            $("#subtitle").text("... or maybe a poem");
            $(".bgi").eq(3).fadeOut();
        }else if(audio.currentTime>14 && audio.currentTime<17){
            $("#subtitle").text("or something from the kids who live here");
            $(".bgi").eq(2).fadeOut();
        }else if(audio.currentTime>17 && audio.currentTime<19){
            $("#subtitle").text("What would you put here?");
        }else if(audio.currentTime>19){
            $(".bgi").eq(1).fadeOut();
        }
    });
    
    $("#title").click(function() {
        $('html, body').animate({
            scrollTop: $("#gridMap").offset().top
        }, 1200);
    });
    
});
