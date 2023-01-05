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

/* Wrap all code that interacts with the DOM in a call to jQuery to ensure that
the code isn't run until the browser has finished rendering all the elements
in the html. */
window.addEventListener("load", (event) => {

  $(function () {

    /* Added code to display the current date in the header of the page. */
    displayDate.text(currentTime.format('dddd, MMMM D, YYYY'));

    /* Add code to apply the past, present, or future class to each time
    block by comparing the id to the current hour. */

    for (var i = 0; i < timeblockArray.length; i++) {
        militaryTime = currentTime.format('HH');
        if (timeblockArray[i].hour == militaryTime) {
          timeblockArray[i].id.addClass('present');
        } else if (timeblockArray[i].hour < militaryTime) {
          timeblockArray[i].id.addClass('past');
        } else {
          timeblockArray[i].id.addClass('future');
        }
    };

    /* Added a listener for click events on the save button. */

    /* Save users input when they click save */
    saveButton.on('click', saveInput);

    function saveInput (event) {
        event.preventDefault();

        textArea = $(this).siblings('textarea').val();

        if (textArea != null) {
          var userInputTemp = 
            {
              input: textArea,
              timeId: $(this).parent().attr('id')
            };
          userInput.push(userInputTemp);
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

    /* Added code to get any user input that was saved in localStorage and set
    the values of the corresponding textarea elements. */

    function renderInput() {
      for (var i = 0; i < userInput.length; i++) {
        var userInputLoop = userInput[i].timeId;
        var userInputRender = userInput[i].input;
        if (userInputLoop !== null) {
          for (var k = 0; k < timeblockArray.length; k++) {
            if (userInputLoop == timeblockArray[k].idValue) {
              var id = "#" + userInputLoop;
              var selectId = $(id).children('textarea');
              selectId.text(userInputRender);
            }
          }
        }
      }
    };

  });

});