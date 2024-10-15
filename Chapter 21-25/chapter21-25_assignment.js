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

// 9 will be start