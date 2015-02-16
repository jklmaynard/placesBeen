$(document).ready(function(){
  $("form#placeOMeter").submit(function(event){
    event.preventDefault();

    var inputtedPlaceName = $("input#place-name").val();
    var inputtedTimeOYear = $("input#time-o-year").val();
    var inputtedNotes = $("input#notes").val();
    var newPlace = { placeName: inputtedPlaceName, timeoyear: inputtedTimeOYear, notes: inputtedNotes };

    $("ul#places-togo").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

  $("input#place-name").val("");
  $("input#time-o-year").val("");
  $("input#notes").val("");

  $(".place").last().click(function(){
    $("#description").show();
    $("#description h2").text(newPlace.placeName);
    $(".place-name").text(newPlace.placeName);
    $(".time-o-year").text(newPlace.timeoyear);
    $(".notes").text(newPlace.notes);
  });

  });
});
