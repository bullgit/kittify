/**
 * Kittify
 * 
 * Replace all images of your page with cute cats. 
 *
 * Idea & initial JS by Mads Cordes.
 * WordPress-Plugin & optimized JS by Tim Pietrusky.
 * 
 * timpietrusky.com
 * 
 */
(function (window, document) {
  "use strict";
  
  function kittify() {
    // Get all the images of the page
    var images = document.getElementsByTagName("img"), 
        img, 
        width, 
        height;
    
    // Replace the images with a placekitten image
    for (var i = 0; i < images.length; i++) {
      img = images[i];
      
      // Width of the current image
      width = img.width;
      // Height of the current inage
      height = img.height;
      
      // Replace the src of the img with the url of placekitten
      img.src = "http://placekitten.com/"+width+"/"+height;

      // Set the width of the current image
      img.width = width;
      // Set the width of the current image
      img.height = height;
    }
  }
  
  // Crossbrowser document ready
  if (window.addEventListener) {
    window.addEventListener("load", kittify, false);
  } else if (window.attachEvent) {
    window.attachEvent("onload", kittify);
  } else {
    window.onload = kittify;
  }
  
}(this, document));