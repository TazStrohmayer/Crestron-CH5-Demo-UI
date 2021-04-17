
// Animations
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

// Page flip to Launch
function goToLaunch() {
  $(".launch-page").show();
  $(".main-page").hide();
  animateCSS('.header-title','slideInDown');
  animateCSS('.launch-logo', 'fadeIn');
  animateCSS('.launch-modes', 'fadeIn');
  animateCSS('.launch-footer-left','slideInUp');
}

// Page flip to Main
function goToMain() {
  $(".launch-page").hide();
  $(".main-page").show();
  animateCSS('.header-logo','slideInDown');
  animateCSS('.header-date-time','slideInDown');
  animateCSS('.main-footer-left','slideInUp');
  animateCSS('.main-footer-center','slideInUp');
  animateCSS('.main-footer-right','slideInUp');
  
}

goToLaunch();

$(".btn").on("click", function(event) {
  console.log(event.target.name);

  // PAGE FLIPS //
  if (event.target.name === "power") {
    goToLaunch();
  }

  if (event.target.className === "btn launch-mode-btn") {
    goToMain();
  }

  // SUB PAGE FLIPS
  if (event.target.name === "present") {
    $(".present-sub").fadeIn();
    $(".atc-sub").hide();
    $(".vtc-sub").hide();
  }

  if (event.target.name === "atc") {
    $(".present-sub").hide();
    $(".atc-sub").fadeIn();
    $(".vtc-sub").hide();
  }

  if (event.target.name === "vtc") {
    $(".present-sub").hide();
    $(".atc-sub").hide();
    $(".vtc-sub").fadeIn();
  }
});
