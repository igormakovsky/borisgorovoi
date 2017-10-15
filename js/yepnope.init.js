// IgorMakovsky.ru
// Yep-nope mobile custom script loader

$(window).load(function() {

yepnope({
  test : jQuery.browser.mobile,
  yep  : '',
  nope : ['js/skrollr.min.js','js/skrollr.init.js','js/retina-1.1.0.min.js']
});

});