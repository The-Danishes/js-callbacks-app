// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

/* global $ */


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

function grabData() {
  var trucksDiv = document.getElementById('trucks');
  trucksDiv.innerHTML = "<h2>Loading...</h2>";

  $.get("https://data.sfgov.org/resource/jjew-r69b.json", function(response) {
    var htmlString = '';

    for (var i = 0; i < response.length; i++) {
      var truck = response[i];
      htmlString = htmlString + "<div class='food-truck'>";
      htmlString = htmlString + "<h2 onclick='changeTruckColor(this)'>" + truck.applicant + "</h2>";
      htmlString = htmlString + "<h3>" + truck.optionaltext + "</h3>";
      htmlString = htmlString + "<h4>" + truck.location + "</h4>";
      htmlString = htmlString + "</div>";
    }

    trucksDiv.innerHTML = htmlString;
  });
}

function changeTruckColor(truckDiv) {
  if (truckDiv.style.color === "red") {
    truckDiv.style.color = "black";
  }
  else {
    truckDiv.style.color = "red";
  }
}


function hideTrucks() {
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++) {
    trucks[i].style.display = 'none';
  }
}

function showTrucks() {
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++) {
    trucks[i].style.display = '';
  }
}

function showTacos() {
  var trucks = document.querySelectorAll('.food-truck');
  for (var i = 0; i < trucks.length; i++) {
    var truck = trucks[i];

    if (truck.innerHTML.indexOf("Tacos") !== -1) {
      truck.style.display = '';
    }
    else {
      truck.style.display = 'none';
    }

  }
}


