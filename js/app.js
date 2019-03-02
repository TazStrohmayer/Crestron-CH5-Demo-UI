// $(".launch-page").hide();
// $(".main-page").hide();

$('.btn').on('click', function(event){
  console.log(event.target.name);

  // PAGE FLIPS //
  if (event.target.name === 'power') {
    $(".launch-page").fadeIn(200);
    $(".main-page").fadeOut(200);
  }

  if (event.target.className === 'btn launch-mode-btn') {
    $(".launch-page").fadeOut(200);
    $(".main-page").fadeIn(200);
  }


  
});
