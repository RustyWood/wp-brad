$(function () {

  //Cache the window object
  var $window = $(window);

  //Parallax background effect
  $('section[data-type="background"]').each(function () {

    var $bgobj = $(this); // assigning the object

    $(window).scroll(function () {

      //scroll the background at var speed
      //yPos is a negative value because scrolling up

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      //put together final bg position
      var coords = '50%' + yPos + 'px';

      //move the bg
      $bgobj.css({ backgroundPosition: coords });

    });//end window scroll

  });

});
