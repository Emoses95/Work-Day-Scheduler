var currentDay = $('#currentDay');

// calling diplay for current time
setInterval(displyDay, 1000)


//Button onclick
$(".saveBtn").on("click", handleEventFormSubmit)

// Adds event to local storage and prints the event data
function handleEventFormSubmit(event) {
  event.preventDefault();

  // read user input from the timeblock
  var textareaData = $(this).siblings("textarea").val()
  var hourBlock = $(this).parent().attr("id")
  console.log(textareaData, hourBlock)

  // local storage 
  localStorage.setItem(hourBlock, textareaData)
}

function localStorageRetr() {

  // for loop for timeblocks info from local storage
  for (let i = 9; i < 18; i++) {
    var blockStorage= localStorage.getItem("hour-"+i)
    $("#hour-"+i).children("textarea").val(blockStorage)
    
  }
}

function getColors(){
  var currentHour = dayjs().hour()
  // for loop for colors to change with present future and past 
  for (let i = 9; i < 18; i++) {
    if(i < currentHour){
      $("#hour-"+i).addClass("past")
    }else if( i === currentHour){
      $("#hour-"+i).addClass("present")
    }else{
      $("#hour-"+i).addClass("future")
    }
  }
}

localStorageRetr()
// Handles displaying the time
function displyDay() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
  getColors()
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
;
