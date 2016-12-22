// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


function changeColors() {
  setTimeout(function() {
    var first = document.getElementById('first');
    first.style.color = "red";

    setTimeout(function() {
      var second = document.getElementById('second');
      second.style.color = "blue";
    }, 1000);    


  }, 1000);
}
