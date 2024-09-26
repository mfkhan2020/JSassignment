
// 1. 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

let city_name = prompt("Enter Your City Name : Karachi, Multan, Faisalabad").toLowerCase();

if (city_name == "karachi"){
    document.getElementById("para1").innerHTML = "Welcome To The City of Lights";
}
else if (city_name == "multan"){
    document.getElementById("para1").innerHTML = "Welcome To The City of Saints";
}
else if (city_name == "faisalabad"){
    document.getElementById("para1").innerHTML = "Welcome To The Manchester of Pakistan";
}
else{
    document.getElementById("para1").innerHTML = "Your City is Not in The List";
}


// 2.Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("Write Your Gender : Male or Female").toLowerCase();

if (gender == "male"){
    document.getElementById("para2").innerHTML = "Good Morning Sir";
}
else if (gender == "female"){
    document.getElementById("para2").innerHTML = "Good Morning Ma'am";
}
else {
    document.getElementById("para2").innerHTML = "Select your gender please Male or Female";
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

let traffic_signal_input = prompt("Enter Your Traffic Signal Color : Red, Yellow, Green").toLowerCase();
console.log(traffic_signal_input);
if (traffic_signal_input == "red"){
    document.getElementById("red_light").style.backgroundColor = "red";
    document.getElementById("red_msg").style.color = "red";
    document.getElementById("red_msg").style.fontWeight = "900";
    document.getElementById("red_msg").style.fontSize = "20px";
}
else if (traffic_signal_input == "yellow"){
    document.getElementById("yellow_light").style.backgroundColor = "yellow";
    document.getElementById("yellow_msg").style.color = "yellow";
    document.getElementById("yellow_msg").style.fontWeight = "900";
    document.getElementById("yellow_msg").style.fontSize = "20px";
}
else if (traffic_signal_input == "green"){
    document.getElementById("green_light").style.backgroundColor = "green";
    document.getElementById("green_msg").style.color = "green";
    document.getElementById("green_msg").style.fontWeight = "900";
    document.getElementById("green_msg").style.fontSize = "20px";
}
else{
    document.getElementById("para3").innerHTML = "Select your Traffic Light Color : Red, Yellow, Green";
}


// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

let petrol = Number(prompt("Enter Your Fuel in Litres : Below 1 use 0.xx"));
if (petrol <= 0.25){
    document.getElementById("para4").innerHTML = "Please refill the fuel in your car."
}
else{
    document.getElementById("para4").innerHTML = "You have sufficient fuel in your car."
}



// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

let eng_marks = Number(prompt("Enter Your English Marks"));
let math_marks = Number(prompt("Enter Your Math Marks"));
let physics_marks = Number(prompt("Enter Your Physics Marks"));
let total_marks = Number(prompt("Enter Your Total Marks"));
let obtained_marks = eng_marks + physics_marks + math_marks;
let percentage = ((obtained_marks / total_marks) * 100);
console.log(percentage.toPrecision(4));
let grade, remarks;
if (percentage >= 80){
    
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70){
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60){
    grade = "B";
    remarks = "You Need To Improve";
}
else if (percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
}

document.getElementById("para6-1").innerHTML = total_marks;
document.getElementById("para6-2").innerHTML = obtained_marks;
document.getElementById("para6-3").innerHTML = percentage;
document.getElementById("para6-4").innerHTML = grade;
document.getElementById("para6-5").innerHTML = remarks;


// 7

let secret_num = 3;
let user_num = Number(prompt("Guess The Secret Number Between 1 To 10"));
if (secret_num == user_num){
    document.getElementById("para7").innerHTML = "Bingo! Correct Answer";
}
else if (user_num == 4 || user_num == 2){
    document.getElementById("para7").innerHTML = "Close Enough To The Secret Number";
}
else{
    document.getElementById("para7").innerHTML = "Try Again";
}



// 8

let user_divider_num = Number(prompt("Enter Your Number for Division by '3'"));
let divison_by3 = user_divider_num % 3
if (divison_by3 == 0){
    document.getElementById("para8").innerHTML = "Your Number is Divisible by 3";
}
else{
    document.getElementById("para8").innerHTML = "Your Number is not Divisible by 3";
}


// 9


let evenodd_user = Number(prompt("Enter Your Number to Check 'Even or Odd'"));
let evenodd_algo = evenodd_user % 2;
if (evenodd_algo == 0){
    document.getElementById("para9").innerHTML = "Your Number is Even";
}
else {
    document.getElementById("para9").innerHTML = "Your Number is Odd";
}


// 10

let user_temprature = Number(prompt("Enter Temprature"));
if (user_temprature > 40){
    document.getElementById("para10").innerHTML = "Its Too Hot";
}
else if (user_temprature > 30){
    document.getElementById("para10").innerHTML = "The Weather Today is Normal";
}
else if (user_temprature > 20){
    document.getElementById("para10").innerHTML = "Today's Weather is Cool";
}
else if (user_temprature > 10){
    document.getElementById("para10").innerHTML = "OMG! Today’s weather is so Cool";
}
else{
    document.getElementById("para10").innerHTML = "Enter Temprature in Range";
}


// 11

let first_number = Number(prompt("Enter Your First Number For Calculation"));
let second_number = Number(prompt("Enter Your Second Number For Calculation"));
let operator_number = prompt("Enter Your Operator For Calculation : '+, -, /, *, %'");
let calc_result
console.log(operator_number);

if (operator_number == "+"){
    calc_result = first_number + second_number;
}
else if (operator_number == "-"){
    calc_result = first_number - second_number;
}
else if (operator_number == "-"){
    calc_result = first_number * second_number;
}
else if (operator_number == "-"){
    calc_result = first_number / second_number;
}
else if (operator_number == "-"){
    calc_result = first_number % second_number;
}
else{
    alert("Wrong Operator Select")
}
document.getElementById("para11").innerHTML = "Your result is " + calc_result;