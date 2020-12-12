var input = document.getElementById ("in");
var output = document.getElementById ("out");
var reverse = document.getElementById ("reverse");


reverse.onclick = function() {
  var inputString = input.value;
  var reversedString = "";
  var lastLocation = inputString.length - 1;
  for(var i = inputString.length - 1; i > - 1; i--) {
    if(inputString[i] == " " || i == 0) {
     reversedString += inputString.substring(i,lastLocation + 1);
     lastLocation = i;
    }
  }
  output.innerHTML = reversedString;
}


