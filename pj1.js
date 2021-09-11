var one_day = 1000 * 60 * 60 * 24
var present_date = new Date();
var fire_day = new Date(2021, 7, 9)
var Result = Math.floor((present_date.getTime() - fire_day.getTime() ) / (one_day));
var Final_Result = Result.toFixed(0);
