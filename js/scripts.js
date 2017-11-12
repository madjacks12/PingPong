//Business logic
var pingPong = function(number) {
  for(i=1; i<=number; i++) {
    var item = document.createElement("li");
    var nodeI = document.createTextNode(i);
    var nodePing = document.createTextNode("ping");
    var nodePong = document.createTextNode("pong");
    var nodePingPong = document.createTextNode("ping pong");
    var element = document.getElementById("ul_result");
      if (i % 15 === 0) {
          //return "pingPong";
          item.appendChild(nodePingPong);
          element.appendChild(item);
      } else  if (i % 5 === 0) {
          //return "pong";
          item.appendChild(nodePong);
          element.appendChild(item);
      } else  if (i % 3 === 0) {
        item.appendChild(nodePing);
        element.appendChild(item);
          //return "ping";
      }   else {
        item.appendChild(nodeI);
        element.appendChild(item);

      }
  }
};
//UI logic
$(document).ready(function() {
  $('.btn_createList').click(function(){
    debugger;
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);
    //var li_result = "<li>" + result + "</li>"
      //$('#ul_result').append(li_result);
  });
});
