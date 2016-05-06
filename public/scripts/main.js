"use strict";



  $('.navbar-mobile button span').click(function() {
      $(this).children('.caret').toggleClass("rotate-180");
      $(this).closest('.nav').find('button a').not(this).children('.caret').removeClass("rotate-180");
  });
