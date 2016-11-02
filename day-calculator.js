// Correct dates:

// 2015/12/31 is day 365 of the year 2015
    //result now: invalid date
      //doesn't work for any December date
      //doesn't work for any 31 of a month
// 2000/3/2 is day 62 of the year 2000
   //result now: 2000/3/2 is day 60 of the year 2000
   //note: 2000 is a leap year
// 1900/3/2 is day 61 of the year 1900
  // result now: 1900/3/2 is day 60 of the year 1900
// 2012/2/29 is day 60 of the year 2012
  //result now: invalid date
  //note: 2012 is a leap year


//doomsday algorithm (look up)
//I18N (look up) / I10N (look up)


var date = process.argv[2];


if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

/////////////////////////////

function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  var febDays = daysInFeb(year);
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }


  //////////////////////////

  function validMonth(month) {
    return month && month >= 1 && month <= 12; //smaller/equal or won't grab last month of the year
  }


  /////////////////////

  function validDay(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]; //needs to be smaller/equal or last day in month will be invalid
  }



///////////////////

  function calculateDayNumber(month, day) { // not using param 'day' in my function
    var dayOfYear = day;

    for (var i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    return dayOfYear;
  }

  //////////////////

  function daysInFeb(year) {
    // using our isLeapYear function to include years with 29 days
    if (isLeapYear(year)) {
      return 29;
    } else {
    return 28;
    }
  }

    function isLeapYear(year) { //function defined but we don't use it anywhere
      return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
    }
}


////////////////////////////

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}
