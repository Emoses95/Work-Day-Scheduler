var currentDay = $('#currentDay');
var 

// Adds event to local storage and prints the event data
function handleEventFormSubmit(event){
  event.preventDefault();

  // read user input from the timeblock
  var hour9= timeblockInputEl.val().trim();
  var hour10= timeblockInputEl.val().trim();
  var hour11= timeblockInputEl.val().trim(); 

var newhour= {
  timeblock1: hour9,
  timeblock2: hour10,
  timeblock3: hour11,
};

// Add timeblocks to local storage
var timeblocks= readTimeblocksFromStorage();
timeblocks.push(newTimeblock);
saveTimeblockToStorage(timeblocks);

// print project data
printTimeblockData();

// clear the form inputs
timeblockInputEl.val('');
}



// Handles displaying the time
function displyDay(){
  var rightNow= dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
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
  