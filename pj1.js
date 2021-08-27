
// One day Time in ms (milliseconds)
var one_day = 1000 * 60 * 60 * 24

// To set present_dates to two variables
var present_date = new Date();

// 0-11 is Month in JavaScript
var fire_day = new Date(present_date.getFullYear(), 7, 9)

// To Calculate next year's Christmas if passed already.
if (present_date.getMonth() == 11 && present_date.getdate() > 25)
    fire_day.setFullYear(fire_day.getFullYear() + 1)

// To Calculate the result in milliseconds and then converting into days
var Result = Math.round(present_date.getTime() - fire_day.getTime() ) / (one_day);

// To remove the decimals from the (Result) resulting days value
var Final_Result = Result.toFixed(0);

//To display the final_result value
