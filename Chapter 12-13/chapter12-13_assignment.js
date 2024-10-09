// 1.
/*
let user_input = prompt("Write your number : '0 to 9' or any string");
let check_algo = typeof user_input;
console.log(check_algo);
if (!isNaN(check_algo) === "string"){
    document.getElementById("para1").innerHTML = "This is a Number";
}
else if (check_algo === "String"){
    document.getElementById("para1").innerHTML = "This is a String";
}
else{
    document.getElementById("para1").innerHTML = "Nothing Happen";
}
*/ // Not Completed so much error and not understand the code

// 2. 

let first_int = Number(prompt("Enter Your First Number"));
let second_int = Number(prompt("Enter Your Second Number"));
if (first_int === second_int){
    document.getElementById("para2").innerHTML = "Both Numbers are equal..."
}
else if (first_int > second_int){
    document.getElementById("para2").innerHTML = "The larger number is " + first_int;
}
else if (first_int < second_int){
    document.getElementById("para2").innerHTML = "The larger number is " + second_int;
}


// 3.

let user_num = Number(prompt("Enter Your Number : Postive , Negative or Zero"));
if (user_num > 0){
    document.getElementById("para3").innerHTML = "Your Number is Positive : " + user_num;
}
else if (user_num < 0){
    document.getElementById("para3").innerHTML = "Your Number is Negative : " + user_num;
}
else{
    document.getElementById("para3").innerHTML = "Your Number is Zero : " + user_num;
}


// 4. 

let vowel_input = prompt("Enter Your Alphabet : 'A, n, z'").toLowerCase();
if (vowel_input.length === 1){
    if (vowel_input === "a" || vowel_input === "e" || vowel_input === "i" || vowel_input === "o" || vowel_input === "u"){
        document.getElementById("para4").innerHTML = "It's a Vowel 'TRUE!'";
    }
    else {
        document.getElementById("para4").innerHTML = "It's not a Vowel 'FALSE!'";    
    }
}
else{
    document.getElementById("para4").innerHTML = "Enter single charachter";
}


// 5.

let correct_pwd = "abc123";
let user_pwd = prompt("Please Enter Your Password");
if (correct_pwd === user_pwd){
    document.getElementById("para5").innerHTML = "Correct! The password you entered matches the original password";
}
else {
    document.getElementById("para5").innerHTML = "Incorrect password";
}


// 6. 

var greeting;
var hour = 13;
if (hour < 18) {
document.getElementById("para6").innerHTML = greeting = "Good day";
}
else {
    document.getElementById("para6").innerHTML = greeting = "Good evening";
}


// 7.

let time_input = prompt("Enter time in 24 hours clock format like : 1900 = 7pm")
if (time_input >= "0000" && time_input < "1200"){
    document.getElementById("para7").innerHTML = "Good Morning!";
}
else if (time_input >= "1200" && time_input < "1700"){
    document.getElementById("para7").innerHTML = "Good Afternoon!";
}
else if (time_input >= "1700" && time_input < "2100"){
    document.getElementById("para7").innerHTML = "Good Evening!";
}
else if (time_input >= "2100" && time_input <= "2359"){
    document.getElementById("para7").innerHTML = "Good Night!";
}
else {
    document.getElementById("para7").innerHTML = "Enter time in right format like : 1900 = 7pm";
}