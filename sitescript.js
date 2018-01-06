//TODO: MOVE TO DIFFERENT LOCATION

$(function() {

  $(".gallery-image").fancybox();
  
  $('a[href*="#"]:not([href="#"], [data-toggle="collapse"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);        
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 58
        }, 800);
        return false;
      }
    }
  });

  /** jump scroll on navigation */
  var target = $(window.location.hash);    
  if(target.length) {      
    setTimeout(function() {
      window.scrollTo(0, 0);        
    }, 1);
    setTimeout(function() {        
      $('html, body').animate({
        scrollTop: target.offset().top - 58       
      }, 'slow');
    }, 100);
  }

});