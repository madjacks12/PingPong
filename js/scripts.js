//Business logic
var pingPong = function(number) {
  if (number % 15 === 0) {
    return "pingPong";
  } else  if (number % 5 === 0) {
    return "pong";
  } else  if (number % 3 === 0) {
    return "ping";
  } else {
    return number;
  }
};
//UI logic
$(document).ready(function() {
  $('.btn_createList').click(function(){
    event.preventDefault();
    //debugger;
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    var li_result = "<li>" + result + "</li>"
      $('.ul_result').append(li_result);
  });
});
