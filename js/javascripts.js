$(document).ready(function(){

// Random logo placement

var image = new Array ();
image[0] = "img/planes/plane-1.png";
image[1] = "img/planes/plane-2.png";
image[2] = "img/planes/plane-3.png";
var size = image.length
var x = Math.floor(size*Math.random())

$('.random').attr('src',image[x]);

// Current year placement

var currentYear = (new Date).getFullYear();
$("#year").text( (new Date).getFullYear() );

// Sticky header

$('.stickybox').waypoint('sticky');

var s = skrollr.init();

});