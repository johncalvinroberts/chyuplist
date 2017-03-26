//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require moment
//= require bootstrap-datepicker
//= require bootstrap-datetimepicker
//= require_tree .

$('.input-daterange').datepicker({
});

$(function(){
  $(".tab").on("click", function(e){
    // Change active tab
    $(".tab").removeClass('active');
    $(this).addClass('active');
    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass('hidden');
    // Show target tab-content (use class="hidden")
    $($(this).data('target')).removeClass('hidden');
  });
});

$(function () {
    $('.form_datetime').datetimepicker({ format: 'YYYY-MM-DD HH:mm' });
});


function updateClock(){
    var currentTime = new Date ( );
    var currentHours = currentTime.getHours ( );
    var currentMinutes = currentTime.getMinutes ( );
    var currentSeconds = currentTime.getSeconds ( );

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
    currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = ( currentHours == 0 ) ? 12 : currentHours;

    // Compose the string for display
    var formatted = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;


  $('.time-rect-container').html(formatted);
}

$(document).ready(function() {
    setInterval("updateClock()",1000);
});

