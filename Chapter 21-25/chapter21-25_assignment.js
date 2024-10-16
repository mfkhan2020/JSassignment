// 1
/*
let first_name = prompt("Enter Your First Name");
let last_name = prompt("Enter Your Last Name");
let full_name = first_name + " " + last_name;
document.getElementById("para1").innerHTML = "Welcome " + full_name;

// 2

let user_mobile_input = prompt("What is your favourite mobile phone model?")
let check_length_input = user_mobile_input.length;
document.getElementById("para2").innerHTML = "My favourite phone is " + user_mobile_input + " and length of string is : " + check_length_input;
*/

// 3

let pakistani = "Pakistani";
let  find_index_n = pakistani.indexOf("n")
document.getElementById("para3-a").innerHTML = "String : " + pakistani;
document.getElementById("para3-b").innerHTML = "Index of 'n' : " + find_index_n;

// 4

let hello_world = "Hello World";
let find_index_l = hello_world.lastIndexOf("l")
document.getElementById("para4-a").innerHTML = "String : " + hello_world;
document.getElementById("para4-b").innerHTML = "Last Index of 'l' : " + find_index_l;

// 5

let pakistani_2 = "Pakistani";
let find_index_3 = pakistani_2.charAt(3)
document.getElementById("para5-a").innerHTML = "String : " + pakistani_2;
document.getElementById("para5-b").innerHTML = "Index of '3' : " + find_index_3;

// 6 Confusing not attempt

// 7

let hyderabad = "Hyderabad";
document.getElementById("para7-a").innerHTML = "City :" + hyderabad;
let islamabad = hyderabad.replace("Hyder", "Islam");
document.getElementById("para7-b").innerHTML = "After Replacement : " + islamabad;

// 8

let message = "Ali and Sami are best friends. They play cricket and football together.";
document.getElementById("para8-a").innerHTML = "Message :" + message;
let replace_message = message.replace(/and/g, "&");
document.getElementById("para8-b").innerHTML = "After Replacement : " + replace_message;

// 9 

let string_472 = "472";
let string_472_type = typeof(string_472);
document.getElementById("para9-a").innerHTML = "Value : " + string_472;
document.getElementById("para9-b").innerHTML = "Type : " + string_472_type;
let strint_to_num_472 = Number(string_472);
let string_472num_type = typeof(strint_to_num_472);
document.getElementById("para9-c").innerHTML = "Value : " + strint_to_num_472;
document.getElementById("para9-d").innerHTML = "Type : " + string_472num_type;

// 10
/*
const user_input_caps = prompt("Write your word to capatalize.");
document.getElementById("para10-a").innerHTML = "User Input : " + user_input_caps;
let caps_result = user_input_caps.toUpperCase();
document.getElementById("para10-b").innerHTML = "Upper Case : " + caps_result;

// 11

document.getElementById("para11-a").innerHTML = "User Input : " + user_input_caps;
let text_title = user_input_caps.charAt(0).toUpperCase() + user_input_caps.slice(1);
document.getElementById("para11-b").innerHTML = "Title Case : " + text_title;
*/
// 12

let var_num = 35.36;
document.getElementById("para12-a").innerHTML = "Number : " + var_num;
let num_to_string = var_num.toString().replace(".", "");
document.getElementById("para12-b").innerHTML = "Result : " + num_to_string;

// 13 tooo much complicated need to learn
/*
let input_username = prompt("Enter Your User Name");
if (input_username == "@" || input_username == "," || input_username == "." || input_username == "!"){
    document.getElementById("para13-a").innerHTML = "Result : " + num_to_string;
}
*/

// 14
/*
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let promt_A = prompt("Welcome to Bakery, What do you want to order?").toLowerCase();
if (A.includes(promt_A)){
    let index_num = A.indexOf(promt_A);
    document.getElementById("para14").innerHTML = promt_A + " is available at index " + index_num + " at our bakery.";
}
else{
    document.getElementById("para14").innerHTML = "We are sorry "+ promt_A + " is not available in our bakery.";
}
*/
// 15 it should be done after study

// 16

let university = "University of Karachi";
let university_arr = university.split("");
console.log(university_arr);
let loop_arr = " ";
for (i = 0; i < university_arr.length; i++){
    loop_arr += university_arr[i] + "<br>"
}
document.getElementById("para16").innerHTML = loop_arr;

// 17
/*
let last_char_user = prompt("Enter your word to check the last alphabet.")
document.getElementById("para17-a").innerHTML = "User Input : " + last_char_user;
let user_char_check = last_char_user.charAt(last_char_user.length - 1);
document.getElementById("para17-b").innerHTML = "Last charachter of input : " + user_char_check;
*/

// 18

let string_the = "The quick brown fox jumps over the lazy dog".toLowerCase().split(" ");
document.getElementById("para18-a").innerHTML = string_the;
let the_check = string_the.filter(word => word === "the").length;
document.getElementById("para18-b").innerHTML = "There are " + the_check + " occurences of word 'the'";