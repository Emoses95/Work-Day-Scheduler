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

  // local storage to set item to hourblock 
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
  // call getcolors for loop to occur with appropriate hour
  getColors()
}

