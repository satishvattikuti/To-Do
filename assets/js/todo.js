//check off todos by clciking

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// click oon x to delete
$("ul").on('click','span',function(e) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
  if(e.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append('<li><span><i class="fas fa fa-trash"></i></span> '+ todoText + '</li>');
  }
});

$("#fade").click(function() {
  $("input[type='text']").slideToggle(500);
});