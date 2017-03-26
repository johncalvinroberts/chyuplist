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


$(document).ready(function () {
    setInterval(function () {
        $('.time-rect-container').load('application/give_time');
    }, 1000);
});
