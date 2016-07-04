//Takes care of loading part of page, and changing welcome text
$(document).ready(function(){
  $('.loading_content').show();
  $('.content_container').hide();
  document.body.style.visibility = 'visible';
})

$(window).load(function(){
    function show_main(){
      $('.loading_content').fadeOut('slow');
      $('.content_container').fadeIn('slow');
    };


      function change_text(){
      $("#welcome").fadeOut(function() {
      $(this).text("Hi there!").fadeIn(1000);
    });
    };

    window.setTimeout( show_main, 2000 );
    window.setTimeout( change_text, 5000 );
})
//============================================//

//Takes care of switching between certificates and new info modals
$(document).ready(function(){
  $("#courses").click(function(){
    $('#modal-body2').hide();
    $('#modal-body1').show();
  });

  $("#new").click(function(){
    $('#modal-body1').hide();
    $('#modal-body2').show();
  });
})
//===================================================================//

//Scroller button
$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('[name = top').offset().top}, 1000,'swing');
    });
});
//=======================================================================================//

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();

    $('.section1').css({
        'opacity': ((height - scrollTop*1.1) / height)
    });
});
