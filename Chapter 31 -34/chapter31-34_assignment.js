// 1 ok
let current_date_time = new Date();
document.getElementById("para1").innerHTML = current_date_time;


// 2 ok
let month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let current_month = new Date().getMonth();
let current_month_name = month_names[current_month];
document.getElementById("para2").innerHTML = "Current Month is : " + current_month_name;


// 3 ok
let day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let current_day = new Date().getDay();
let current_day_name = day_names[current_day];
document.getElementById("para3").innerHTML = "Today is " + current_day_name;

// 4 ok
if (current_day == 0 || current_day == 6){
    document.getElementById("para4").innerHTML = "It's Funday";
}
else{
    document.getElementById("para4").innerHTML = "It's Working day.";
}

// 5 ok
let current_date = new Date().getDate();
if (current_date < 16){
    document.getElementById("para5").innerHTML = "First fifteen days of the month.";
}
else{
    document.getElementById("para5").innerHTML = "Last days of the month";
}


// 6 ok
let current_datetime = new Date();
document.getElementById("para6a").innerHTML = "Current Date & Time : " + current_datetime;
let elapsed_milisec = current_datetime.getTime()
document.getElementById("para6b").innerHTML = "Elapsed miliseconds since January 1, 1970 : " + elapsed_milisec;
let elapsed_minutes = elapsed_milisec / (1000 * 60);
document.getElementById("para6c").innerHTML = "Elapsed minutes since January 1, 1970 : " + elapsed_minutes;


// 7 ok
let check_am_pm = new Date().getHours();
if (check_am_pm <= 12){
    document.getElementById("para7").innerHTML = "It's AM";
}
else{
    document.getElementById("para7").innerHTML = "It's PM";
}


// 8 ok
let later_date = new Date("dec 31, 2020");
document.getElementById("para8").innerHTML = "Later Date : " + later_date;

// 9  ok
let current_gettime = current_date_time.getTime();
let ramzan_date = new Date("jun 18, 2015");
let ramzan_gettime = ramzan_date.getTime();
let msdiff = current_gettime - ramzan_gettime;
let elapsed_ramzan_days = Math.floor(msdiff / (1000 * 60 * 60 * 24));
document.getElementById("para9").innerHTML = elapsed_ramzan_days + " days have passed since 1st Ramadan 2015";


// 10 ok
let reference_date_2015 = new Date();
let begining_of_2015 = new Date("jan 1, 2015");
let diff_of_2015 = reference_date_2015 - begining_of_2015;
let elapsed_sec_2015 = Math.floor(diff_of_2015 / 1000);
document.getElementById("para10").innerHTML = "On reference date " + reference_date_2015 + " " + elapsed_sec_2015 + " seconds had passed since begining of 2015";


// 11 ok
let current_date_for_hour = new Date();
let current_gethour = current_date_for_hour.getHours();
document.getElementById("para11a").innerHTML = "Current Date : " + current_date_for_hour;
current_date_for_hour.setHours(current_gethour - 1);
document.getElementById("para11b").innerHTML = "1 Hour ago it was : " + current_date_for_hour;


// 12 ok
let datetime_for_100 = new Date();
document.getElementById("para12a").innerHTML = "Current Date : " + datetime_for_100;
datetime_for_100.setFullYear(datetime_for_100.getFullYear() - 100);
document.getElementById("para12b").innerHTML = "100 years back it was : " + datetime_for_100;


// 13 ok
let user_age = prompt("Enter your age for your birthday");
let today_date_calc = new Date().getFullYear();
let calc_birthday = today_date_calc - user_age;
document.getElementById("para13a").innerHTML = "Your age is " + user_age;
document.getElementById("para13b").innerHTML = "your birth year is " + calc_birthday;


// 14 ok
let no_of_units = 410;
document.getElementById("para14d").innerHTML = "Number of Units : " + no_of_units;
let charges_per_unit = 16;
document.getElementById("para14e").innerHTML = "Charges per unit : " + charges_per_unit;
let calc_units = no_of_units * charges_per_unit;
document.getElementById("para14f").innerHTML = "Net Amount Payable (within due date) : " + calc_units;
let late_payment = calc_units + 350;
document.getElementById("para14g").innerHTML = "Gross Amount Payable (after due date) : " + late_payment;