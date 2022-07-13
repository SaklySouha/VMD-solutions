// -------------------- active nav ----------------------


$(document).ready(function () {
    var loc = window.location.pathname;
    loc = "http://127.0.0.1:5500" + loc;
  
  
    $('.nav-item').find('.nav-link').each(function () {
  
      $(this).toggleClass('active', $(this).attr('href') == loc);
      console.log(loc);
  
    });
  
  });