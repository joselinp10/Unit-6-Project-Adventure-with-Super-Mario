$(".buttons2").hide();
$(".start-button").click(function() {
     $(".firstImage,.title,.button").fadeOut();
     $(".message-1").show();  
     $(".pipe-img").show();  
});

$(".start-button2").click(function() {
      $(".firstImage,.title,.button").fadeOut();
      $(".message-2").show();
      $(".sad-mario-img").show();
});

$(".pipe-img").dblclick(function() {
    $(".message-1,.pipe-img").fadeOut();
    
});

$(".pipe-img").dblclick(function() {
    $(".message-1,.pipe-img").fadeOut();
   	$(".message-3").show();
    $(".mushroom-img").show();
});

$(".mushroom-img").click(function() {
    $(".mushroom-img,.message-3").fadeOut();
    $(".message-4").show();
    $(".luigi-img").show();
    $(".buttons2").show();
    
   
});

$(".denytrade-button").click(function(){
    $(".luigi-img,.message-4,.buttons2").fadeOut(); 
    $(".message-7").show();
    $(".luigi-gif").show();
});

$(".trade-button").click(function(){
    $(".luigi-img,.message-4,.buttons2").fadeOut(); 
    $(".message-5").show();
    $(".luigi-img2").show();  
});
$(".luigi-img2").dblclick(function(){
    $(".message-5,.luigi-img2").fadeOut();
    $(".message-6").show();
   $(".coins-img").show();  
});

$(".luigi-gif").hover(function(){
   $(".message-7,.luigi-gif").fadeOut();
    $(".message-8").show();
    $(".banana-peel").show();
});




	