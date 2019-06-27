$(document).ready(function(){

// only numbers can be entered into credit card fields
$(".credit_card").on("keypress keyup blur",function (event) {    
           $(this).val($(this).val().replace(/[^\d].+/, ""));
            if ((event.which < 48 || event.which > 57)) {
                event.preventDefault();
            }
        });

//associated fields appear on button radio click
  $('.credit_card').hide();
  $('.wire_transfer').hide();
$('input[type="radio"]').click(function(){
    $('.credit_card').hide();
    $('.wire_transfer').hide();
    var radio_selection = $(this).val();
    $("."+radio_selection).show();
})

$('.removable').draggable();

$("#trash_can").droppable({
    accept: '.removable',
    drop: function(event, ui) {
      if(confirm("Are you sure that you want to delete this item?")){
        ui.draggable.remove();
      }
    }
});

$(".informationable").click(function(){
  console.log($(this).attr("value"));
  $.ajax({url: "info/"+$(this).attr("value")+".txt", success: function(result){
    $("#more_info").html(result);
  }});
});

});