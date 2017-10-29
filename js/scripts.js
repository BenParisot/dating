//backend logic

var date1 = 0;
var date2 = 0;
var date3 = 0;
var date4 = 0;

//userinterface logic

$(document).ready(function() {
  $("#quiz").submit(function(event) {

		var inputName = $("input#name").val();
    var q1 = $("#tomato").val();
    var q2 = $("#banana").val();
    var q3 = $("#cucumber").val();
		var q4 = $("#apple").val();
		var q5 = $("#pepper").val();
		var q6 = $("#grape").val();



    if (q1 === "1") {
      date1 += 1;
    } else if (q1 === "2") {
      date2 += 1;
    } else if (q1 === "3"){
      date3 += 1;
    } else if (q1 === "4") {
      date4 += 1;
    }

    if (q2 === "1") {
      date1 += 1;
    } else if (q2 === "2") {
      date2 += 1;
    } else if (q2 === "3"){
      date3 += 1;
    } else if (q2 === "4") {
      date4 += 1;
    }

    if (q3 === "1") {
      date1 += 1;
    } else if (q3 === "2") {
      date2 += 1;
    } else if (q3 === "3"){
      date3 += 1;
    } else if (q3 === "4") {
      date4 += 1;
    }
    //console.log("date2:" + date2);


    if (date1 > date2 && date1 > date3 && date1 > date4) {
      $("#meloni").fadeTo(2500, 1);
    } else if (date2 > date1 && date2 > date3 && date2 > date4) {
      $("#wes").fadeTo(2500, 1);
    } else if (date3 > date1 && date3 > date2 && date3 > date4) {
      $("#kanye").fadeTo(2500, 1);
    } else if (date4 > date1 && date4 > date3 && date4 > date2) {
      $("#glover").fadeTo(2500, 1);
    } else {
			$("#none").fadeTo(2500, 1);
		}

		$("#upper").slideUp(1200, function() {

		});

		$('.name').text(inputName);


    event.preventDefault();
  });

	$("#retake-wes").click(function() {
		location.reload();
	});
	$("#retake-meloni").click(function() {
		location.reload();
	});
	$("#retake-west").click(function() {
		location.reload();
	});
	$("#retake-glover").click(function() {
		location.reload();
	});
	$("#retake-none").click(function() {
		location.reload();
	});
});
