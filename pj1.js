// One day Time in ms (1 day :86,400,000 milliseconds)
var one_day = 1000 * 60 * 60 * 24

// To set present_dates to two variables
var present_date = new Date();

// 0-11 is Month in JavaScript, Days are same...
// result: Mon Aug 09 2021 00:00:00 GMT+0900 (한국 표준시)
var fire_day = new Date(2021, 7, 9)

/* To Calculate the result 
  1. Use '.getTime()' to convert date into milliseconds  
  2. Divide the time that differences between present and fire_day, by 'one_day' 
  3. Use a 'Math.floor()' so that the day doesn't change before 24 hours has passed  
*/
var Result = Math.floor((present_date.getTime() - fire_day.getTime() ) / (one_day));

// To remove the decimals from the (Result) resulting days value
var Final_Result = Result.toFixed(0);
