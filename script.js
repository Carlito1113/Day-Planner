var currentDate = $("#currentDay");
currentDate.text(moment().format("dddd, MMMM Do"));

var nine = $("#nine");
var ten  = $("ten");
var eleven = $("eleven");
var twelve = $("twelve");
var one =$("one");
var two =$("two");
var three = $("three");
var four = $("four");
var five = $("five");

// 1.- Display current time using Moment.js
   console.log(moment().format("dddd, MMMM Do"));
//2.- Click event to save text area content to local storage

//3.- When app opens, display content for each time block from local storage.
    // - it can be done with a loop (more efficient) or by targeting each time block separately

// 4.- Change time block background color depending on the current hour (past, present and future).
console.log(moment().hour());


// Local storage
$("#btn9").on("click", function () {
    localStorage.setItem("hour-9", $("9").val())
});

$("#btn10").on("click", function () {
    localStorage.setItem("hour-10", $("10").val())
});

$("#btn11").on("click", function () {
    localStorage.setItem("hour-11", $("11").val())
});

$("#btn12").on("click", function () {
    localStorage.setItem("hour-12", $("12").val())
});

$("#btn1").on("click", function () {
    localStorage.setItem("hour-1", $("1").val())
});

$("#btn2").on("click", function () {
    localStorage.setItem("hour-2", $("2").val())
});

$("#btn3").on("click", function () {
    localStorage.setItem("hour-3", $("3").val())
});

$("#btn4").on("click", function () {
    localStorage.setItem("hour-4", $("4").val())
});

$("#btn5").on("click", function () {
    localStorage.setItem("hour-5", $("5").val())
});


// Initialize page
init();

function init() {
    var data = localStorage.getItem("hour-9");
    
    if (data !== null){
        $("#9").text(localStorage.getItem("hour-9"))
    }

    data = localStorage.getItem("hour-10");
    if (data !== null){
        $("#10").text(localStorage.getItem("hour-10"))
    }

    data = localStorage.getItem("hour-11");
    if (data !== null){
        $("#11").text(localStorage.getItem("hour-11"))
    }


    data = localStorage.getItem("hour-12");
    if (data !== null){
        $("#12").text(localStorage.getItem("hour-12"))
    }


    data = localStorage.getItem("hour-1");
    if (data !== null){
        $("#1").text(localStorage.getItem("hour-1"))
    }


    data = localStorage.getItem("hour-2");
    if (data !== null){
        $("#2").text(localStorage.getItem("hour-2"))
    }


    data = localStorage.getItem("hour-3");
    if (data !== null){
        $("#3").text(localStorage.getItem("hour-3"))
    }


    data = localStorage.getItem("hour-4");
    if (data !== null){
        $("#4").text(localStorage.getItem("hour-4"))
    }


    data = localStorage.getItem("hour-5");
    if (data !== null){
        $("#5").text(localStorage.getItem("hour-5"))
    }
}