var saveButton = $('.saveBtn');
var currentTime = dayjs();
var userInput = [];
var displayDate = $('#currentDay');
var timeblockArray = [
  {
    id: $('#hour-9'),
    idValue: $('#hour-9').attr('id'),
    hour: 09
  },
  {
    id: $('#hour-10'),
    idValue: $('#hour-10').attr('id'),
    hour: 10
  },
  {
    id: $('#hour-11'),
    idValue: $('#hour-11').attr('id'),
    hour: 11
  },
  {
    id: $('#hour-12'),
    idValue: $('#hour-12').attr('id'),
    hour: 12
  },
  {
    id: $('#hour-13'),
    idValue: $('#hour-13').attr('id'),
    hour: 13
  },
  {
    id: $('#hour-14'),
    idValue: $('#hour-14').attr('id'),
    hour: 14
  },
  {
    id: $('#hour-15'),
    idValue: $('#hour-15').attr('id'),
    hour: 15
  },
  {
    id: $('#hour-16'),
    idValue: $('#hour-16').attr('id'),
    hour: 16
  },
  {
    id: $('#hour-17'),
    idValue: $('#hour-17').attr('id'),
    hour: 17
  }
]
console.log(timeblockArray);

/* Wrap all code that interacts with the DOM in a call to jQuery to ensure that
the code isn't run until the browser has finished rendering all the elements
in the html. */
window.addEventListener("load", (event) => {

  $(function () {

    /* Added code to display the current date in the header of the page. */
    displayDate.text(currentTime.format('dddd, MMMM D, YYYY'));

    /* Add code to apply the past, present, or future class to each time
    block by comparing the id to the current hour. HINTS: How can the id
    attribute of each time-block be used to conditionally add or remove the
    past, present, and future classes? How can Day.js be used to get the
    current hour in 24-hour time? */

    for (var i = 0; i < timeblockArray.length; i++) {
        militaryTime = currentTime.format('HH');
        if (timeblockArray[i].hour = militaryTime) {
          timeblockArray[i].id.addClass('present');
        } else if (timeblockArray[i].hour < militaryTime) {
          timeblockArray[i].id.addClass('past');
        } else {
          timeblockArray[i].id.addClass('future');
        }
    };

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    /* Save users input when they click save */
    saveButton.on('click', saveInput);

    function saveInput (event) {
        event.preventDefault();

        var btnClicked = $(event.target);
        
        if (btnClicked != null) {
          var userInputTemp = [
            {
              input: $(this).children().val(),
              timeId: $(this).attr('id')
            }
          ];
          console.log(userInputTemp);
          userInput.push(userInputTemp);
          console.log(userInput);
        }

        storeInput();
    };

    /* Put object in storage and JSON.stringify to convert it as a string */
    function storeInput() {
      localStorage.setItem("userInput", JSON.stringify(userInput));
    }

    /* Use JSON.parse() to convert text to JavaScript object */
    function init(){
      var userInputStored = JSON.parse(localStorage.getItem("userInput"));

      if (userInputStored !== null){
          userInput = userInputStored;
      };

      renderInput();
    }
    init();

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    function renderInput() {
      for (var i = 0; i < userInput.length; i++) {
        userInputLoop = userInput[i].timeId;
        for (var k = 0; k < timeblockArray.length; k++) {
          if (userInput[i].timeId == timeblockArray[k].idValue) {

          }
        }
      }
    };

  });

});