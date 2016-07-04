$(document).ready(function(){
  $('iframe').show();
  $('.main_content').hide();
  document.body.style.visibility = 'visible';
})

$(window).load(function(){

    function show_main(){
      $('iframe').fadeOut('slow');
      $('.main_content').fadeIn('slow');
    };

      function change_text(){
      $("#welcome").fadeOut(function() {
      $(this).text("Hi there!").fadeIn(1000);
    });
    };

    window.setTimeout( show_main, 2000 );
    window.setTimeout( change_text, 5000 );
})

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

$(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$('[name = top').offset().top}, 1000,'swing');
    });
});
