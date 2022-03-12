/* variables section */
var todaysDate = moment().format("LLLL");
var tasks = [
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
];
var currentHour = new Date().getHours();

/* read current date and display at the top of the calendar */
$("#currentDay").text(todaysDate);

/* functions section */
/* past, present, future color function */
function timeBlockColor() {
  if (currentHour > 8) {
    $("#8am").addClass("past");
  } else if (currentHour >= 8 && currentHour < 9) {
    $("#8am").addClass("present");
  } else if (currentHour < 8) {
    $("#8am").addClass("future");
  }

  if (currentHour > 9) {
    $("#9am").addClass("past");
  } else if (currentHour >= 9 && currentHour < 10) {
    $("#9am").addClass("present");
  } else if (currentHour < 9) {
    $("#9am").addClass("future");
  }

  if (currentHour > 10) {
    $("#10am").addClass("past");
  } else if (currentHour >= 10 && currentHour < 11) {
    $("#10am").addClass("present");
  } else if (currentHour < 10) {
    $("#10am").addClass("future");
  }

  if (currentHour > 11) {
    $("#11am").addClass("past");
  } else if (currentHour >= 11 && currentHour < 12) {
    $("#11am").addClass("present");
  } else if (currentHour < 11) {
    $("#11am").addClass("future");
  }

  if (currentHour > 12) {
    $("#12pm").addClass("past");
  } else if (currentHour >= 12 && currentHour < 1) {
    $("#12pm").addClass("present");
  } else if (currentHour < 12) {
    $("#12pm").addClass("future");
  }

  if (currentHour > 13) {
    $("#1pm").addClass("past");
  } else if (currentHour >= 13 && currentHour < 14) {
    $("#1pm").addClass("present");
  } else if (currentHour < 13) {
    $("#1pm").addClass("future");
  }

  if (currentHour > 14) {
    $("#2pm").addClass("past");
  } else if (currentHour >= 14 && currentHour < 15) {
    $("#2pm").addClass("present");
  } else if (currentHour < 14) {
    $("#2pm").addClass("future");
  }

  if (currentHour > 15) {
    $("#3pm").addClass("past");
  } else if (currentHour >= 15 && currentHour < 16) {
    $("#3pm").addClass("present");
  } else if (currentHour < 15) {
    $("#3pm").addClass("future");
  }

  if (currentHour > 16) {
    $("#4pm").addClass("past");
  } else if (currentHour >= 16 && currentHour < 17) {
    $("#4pm").addClass("present");
  } else if (currentHour < 16) {
    $("#4pm").addClass("future");
  }

  if (currentHour > 17) {
    $("#5pm").addClass("past");
  } else if (currentHour >= 17 && currentHour < 18) {
    $("#5pm").addClass("present");
  } else if (currentHour < 17) {
    $("#5pm").addClass("future");
  }

  if (currentHour > 18) {
    $("#6pm").addClass("past");
  } else if (currentHour >= 18 && currentHour < 19) {
    $("#6pm").addClass("present");
  } else if (currentHour < 18) {
    $("#6pm").addClass("future");
  }
}
timeBlockColor();

/* save tasks to local storage functions */
$(".btn8").on("click", function () {
  var localStor = $("#8am").val();
  localStorage.setItem("8:00", localStor);
});

$(".btn9").on("click", function () {
  var localStor = $("#9am").val();
  localStorage.setItem("9:00", localStor);
});

$(".btn10").on("click", function () {
  var localStor = $("#10am").val();
  localStorage.setItem("10:00", localStor);
});

$(".btn11").on("click", function () {
  var localStor = $("#11am").val();
  localStorage.setItem("11:00", localStor);
});

$(".btn12").on("click", function () {
  var localStor = $("#12pm").val();
  localStorage.setItem("12:00", localStor);
});

$(".btn1").on("click", function () {
  var localStor = $("#1pm").val();
  localStorage.setItem("1:00", localStor);
});

$(".btn2").on("click", function () {
  var localStor = $("#2pm").val();
  localStorage.setItem("2:00", localStor);
});

$(".btn3").on("click", function () {
  var localStor = $("#3pm").val();
  localStorage.setItem("3:00", localStor);
});

$(".btn4").on("click", function () {
  var localStor = $("#4pm").val();
  localStorage.setItem("4:00", localStor);
});

$(".btn5").on("click", function () {
  var localStor = $("#5pm").val();
  localStorage.setItem("5:00", localStor);
});

$(".btn6").on("click", function () {
  var localStor = $("#6pm").val();
  localStorage.setItem("6:00", localStor);
});

/* get saved tasks from localstorage */
$("#8am").val(localStorage.getItem("8:00"));
$("#9am").val(localStorage.getItem("9:00"));
$("#10am").val(localStorage.getItem("10:00"));
$("#11am").val(localStorage.getItem("11:00"));
$("#12pm").val(localStorage.getItem("12:00"));
$("#1pm").val(localStorage.getItem("1:00"));
$("#2pm").val(localStorage.getItem("2:00"));
$("#3pm").val(localStorage.getItem("3:00"));
$("#4pm").val(localStorage.getItem("4:00"));
$("#5pm").val(localStorage.getItem("5:00"));
$("#6pm").val(localStorage.getItem("6:00"));

/* delete text from text area and localstorage */
$(".delbtn8").on("click", function () {
  var localStor = $(this).siblings('#8am').val("");
  localStorage.removeItem("8:00", localStor);
});

$(".delbtn9").on("click", function () {
  var localStor = $(this).siblings("#9am").val("");
  localStorage.removeItem("9:00", localStor);
});

$(".delbtn10").on("click", function () {
  var localStor = $(this).siblings("#10am").val("");
  localStorage.removeItem("10:00", localStor);
});

$(".delbtn11").on("click", function () {
  var localStor = $(this).siblings("118am").val("");
  localStorage.removeItem("11:00", localStor);
});

$(".delbtn12").on("click", function () {
  var localStor = $(this).siblings("#12pm").val("");
  localStorage.removeItem("12:00", localStor);
});

$(".delbtn1").on("click", function () {
  var localStor = $(this).siblings("#1pm").val("");
  localStorage.removeItem("1:00", localStor);
});

$(".delbtn2").on("click", function () {
  var localStor = $(this).siblings("#2pm").val("");
  localStorage.removeItem("2:00", localStor);
});

$(".delbtn3").on("click", function () {
  var localStor = $(this).siblings("#3pm").val("");
  localStorage.removeItem("3:00", localStor);
});

$(".delbtn4").on("click", function () {
  var localStor = $(this).siblings("#4pm").val("");
  localStorage.removeItem("4:00", localStor);
});

$(".delbtn5").on("click", function () {
  var localStor = $(this).siblings("#5pm").val("");
  localStorage.removeItem("5:00", localStor);
});

$(".delbtn6").on("click", function () {
  var localStor = $(this).siblings("#6pm").val("");
  localStorage.removeItem("6:00", localStor);
});