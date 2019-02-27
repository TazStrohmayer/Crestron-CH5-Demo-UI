// $(".launch-page").hide();
// $(".main-page").hide();


$(".launch-mode-btn").on("click", function(event) {
  console.log(event.target.name);
  $(".launch-page").fadeOut(200);
  $(".main-page").fadeIn(200);
});

$('.btn[name="power"]').on("click", function(event){
    console.log(event.target.name);
    $(".launch-page").fadeIn(200);
    $(".main-page").fadeOut(200);
});
