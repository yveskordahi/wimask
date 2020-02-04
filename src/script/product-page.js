$(document).ready(function() {
  counter = 2;

  let h1 = document.querySelector(".tape");
  let input = document.querySelector("input");
  let blanc = document.getElementById("blanc");

  input.addEventListener("input", function() {
    h1.innerHTML = input.value;
  });

  $(".colorMask--variant-black").click(function() {
    if (counter == 1) {
      $(".row--maskImg-black").css("opacity", "1");
      $(".row--maskImg-white").css("opacity", "0");
      h1.style.color = "white";
      counter = 2;
    }
  });

  $(".colorMask--variant-white").click(function() {
    if (counter == 2) {
      $(".row--maskImg-black").css("opacity", "0");
      $(".row--maskImg-white").css("opacity", "1");
      h1.style.color = "black";

      counter = 1;
    }
  });

  $(".mask-black-product1 .color-1").click(function() {
    $(".row--maskImg-black").attr("src", "img/black-mask-blue-logo.png");
  });

  $(".mask-black-product1 .color-2").click(function() {
    $(".row--maskImg-black").attr("src", "img/black-mask-red-logo.png");
  });

  $(".mask-black-product1 .color-3").click(function() {
    $(".row--maskImg-black").attr("src", "img/black-mask-yellow-logo.png");
  });

  $(".mask-black-product1 .color-4").click(function() {
    $(".row--maskImg-black").attr("src", "img/black-mask-green-logo.png");
  });

  $(".mask-black-product1 .color-5").click(function() {
    $(".row--maskImg-black").attr("src", "img/black-mask-pink-logo.png");
  });

  // -------------------White--------------------

  $(".mask-black-product1 .color-1").click(function() {
    $(".row--maskImg-white").attr("src", "img/white-mask-blue-logo.png");
  });

  $(".mask-black-product1 .color-2").click(function() {
    $(".row--maskImg-white").attr("src", "img/white-mask-red-logo.png");
  });

  $(".mask-black-product1 .color-3").click(function() {
    $(".row--maskImg-white").attr("src", "img/white-mask-yellow-logo.png");
  });

  $(".mask-black-product1 .color-4").click(function() {
    $(".row--maskImg-white").attr("src", "img/white-mask-green-logo.png");
  });

  $(".mask-black-product1 .color-5").click(function() {
    $(".row--maskImg-white").attr("src", "img/white-mask-pink-logo.png");
  });
});
