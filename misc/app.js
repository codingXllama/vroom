$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
      e.preventDefault();
      $('.selection p').html($(this).attr('class'));
      $('.selection p').addClass("problem")    
    });
  
    $(document).on('click', function(e) {
      e.preventDefault();
      if ( $(e.target).closest('area').length !=0 )
      {
        $(e.target).addClass("problem")
      } 
      if ( $(e.target).closest('area').length === 0 ) {
        // $('.selection p').removeClass("problem")    
        $('.selection p').html('Click on the issue'); 
      }  
    });
    
  
    
});