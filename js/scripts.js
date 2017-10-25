var factorial = function(number) {
  var total = 1;
  for (index = number; index > 1; index -=2) {
    var total = total * (index * (index-1));

  };
  return total;
}

$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();
    $(".hide").show();
    var outputNumber = parseInt($("#userNumber").val());
    $(".show").text(factorial(outputNumber));
    //alert(factorial(outputNumber));
  })
})
