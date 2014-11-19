$(document).ready(function() {

  //mixpanel track
  $('[track]').click(function () {
    mixpanel.track($(this).attr("track"))  
  });
  
});