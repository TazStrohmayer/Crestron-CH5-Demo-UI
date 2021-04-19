import { publishEvent } from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';

$(document).ready(function() {
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

    // SUB PAGE FLIPS //
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

    // BUTTON PRESSES //
    if (event.target.name === "privacy") {
      publishEvent("b", "1", true);
      setTimeout(() => publishEvent("b", "1", false), 200);
    }
  });
});


// Animations
function animateCSS(element, animation, duration, prefix = 'animate__', callback) {
  const animationName = `${prefix}${animation}`;
  const node = document.querySelector(element)
  if (typeof duration !== 'undefined') {
    node.style.setProperty('--animate-duration', `${duration}`);
  }
  node.classList.add(`${prefix}animated`, animationName);

  function handleAnimationEnd() {
    node.classList.remove(`${prefix}animated`, animationName);
    node.removeEventListener('animationend', handleAnimationEnd)

    if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

// Page flip to Launch
function goToLaunch() {
  $(".launch-page").show();
  $(".main-page").hide();
  animateCSS('.launch-logo', 'fadeIn');
  animateCSS('.launch-modes', 'fadeIn');
  animateCSS('.launch-footer-left','fadeIn');
}

// Page flip to Main
function goToMain() {
  $(".launch-page").hide();
  $(".main-page").show();
  animateCSS('.header-logo','fadeIn');
  animateCSS('.header-date-time','fadeIn');
  animateCSS('.main-footer-left','slideInUp', '0.6s');
  animateCSS('.main-footer-center','slideInUp', '0.6s');
  animateCSS('.main-footer-right','slideInUp', '0.6s');
}

