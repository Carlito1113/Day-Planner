var currentDate = $("#currentDay");
currentDate.text(moment().format("dddd, MMMM Do"));

// 1.- Display current time using Moment.js
   console.log(moment().format("dddd, MMMM Do"));
//2.- Click event to save text area content to local storage

//3.- When app opens, display content for each time block from local storage.
    // - it can be done with a loop (more efficient) or by targeting each time block separately

// 4.- Change time block background color depending on the current hour (past, present and future).
console.log(moment().hour());