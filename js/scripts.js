//backend logic

var house1 = 0;
var house2 = 0;
var house3 = 0;
var house4 = 0;

//userinterface logic

$(document).ready(function() {
  $("#quiz").submit(function(event) {

    var q1 = $("#weapon").val();
    var q2 = $("#animal").val();
    var q3 = $("#incest").val();



    if (q1 === "1") {
      house1 += 1;
    } else if (q1 === "2") {
      house2 += 1;
    } else if (q1 === "3"){
      house3 += 1;
    } else if (q1 === "4") {
      house4 += 1;
    }

    if (q2 === "1") {
      house1 += 1;
    } else if (q2 === "2") {
      house2 += 1;
    } else if (q2 === "3"){
      house3 += 1;
    } else if (q2 === "4") {
      house4 += 1;
    }

    if (q3 === "1") {
      house1 += 1;
    } else if (q3 === "2") {
      house2 += 1;
    } else if (q3 === "3"){
      house3 += 1;
    } else if (q3 === "4") {
      house4 += 1;
    }

    //console.log("House2:" + house2);


    if (house1 > house2 && house1 > house3 && house1 > house4) {
      $("#stark").show();
    } else if (house2 > house1 && house2 > house3 && house2 > house4) {
      $("#lannister").show();
    } else if (house3 > house1 && house3 > house2 && house3 > house4) {
      $("#targaryen").show();
    } else if (house4 > house1 && house4 > house3 && house4 > house2) {
      $("#greyjoy").show();
    } else {
      $("#none").show();
    }

    event.preventDefault();
  });
});
