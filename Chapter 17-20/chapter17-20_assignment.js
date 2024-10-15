// 1

let multi_dimension_arr = [];
document.getElementById("para1").innerHTML = multi_dimension_arr;

// 2

multi_dimension_arr.push([0,1,2,3]);
multi_dimension_arr.push([1,0,1,2]);
multi_dimension_arr.push([2,1,0,1]);

document.getElementById("para2").innerHTML = multi_dimension_arr[0] + "<br>" + multi_dimension_arr[1] + "<br>" + multi_dimension_arr[2];

// 3

let count_num = "";
for (let i = 1; i <= 10; i++){
    count_num += i + "<br>"
}
document.getElementById("para3").innerHTML = count_num;

// 4

let table_num = prompt("Enter the Table Number for Multiplication | e.g : 2, 3 ....");
let table_length = prompt("Enter the Table Length for Multiplication | e.g : 2, 3 ....");
let table_multiply_value = ""
for (i = 1; i <= table_length; i++){
    table_multiply_value += table_num + " x " + i + " = " + (table_num * i) + "<br>";
}
document.getElementById("para4-a").innerHTML = "Multiplication Table of " + table_num;
document.getElementById("para4-b").innerHTML = "Length " + table_length;
document.getElementById("para4-c").innerHTML = table_multiply_value;

// 5

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.getElementById("para5-a").innerHTML = fruits.join(", ");
let fruit_loop_value = ""
for (let i = 0; i < fruits.length; i++){
    fruit_loop_value += "Element at Index " + i + " is " + fruits[i] + "<br>"
}
document.getElementById("para5-b").innerHTML = fruit_loop_value;

// 6-a

let counting = "";
for (i = 1; i <= 15; i++){
    counting += i + ", ";
}
document.getElementById("para6-a").innerHTML = "Counting : " + counting;

// 6-b

let rev_counting = "";
for (i = 10; i >= 1; i--){
    rev_counting += i + ", ";
}
document.getElementById("para6-b").innerHTML = "Reverse Counting : " + rev_counting;

// 6-c

let even_counting = "";
for (i = 0; i <= 20; i++){
    even_counting += i++ + ", ";
}
document.getElementById("para6-c").innerHTML = "Even : " + even_counting;

// 6-d

let odd_counting = "";
for (i = 1; i <= 19; i++){
    odd_counting += i++ + ", ";
}
document.getElementById("para6-d").innerHTML = "Odd : " + odd_counting;

// 6-e

let series_counting = "";
for (i = 2; i <= 20; i++){
    series_counting += i++ + "k" + ", ";
}
document.getElementById("para6-e").innerHTML = "Series : " + series_counting;

// 7

let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let promt_A = prompt("Welcome to Bakery, What do you want to order?");
if (A.includes(promt_A)){
    let index_num = A.indexOf(promt_A);
    document.getElementById("para7").innerHTML = promt_A + " is available at index " + index_num + " at our bakery.";
}
else{
    document.getElementById("para7").innerHTML = "We are sorry "+ promt_A + " is not available in our bakery.";
}

// 8

let largest_num_check = [24, 53, 78, 91, 12];
document.getElementById("para8-a").innerHTML = "Array Items : "+ largest_num_check.join(", ");
let largest_num_result = Math.max(...largest_num_check);
document.getElementById("para8-b").innerHTML = "The largest number is " + largest_num_result;

// 9

let smallest_num_check = [24, 53, 78, 91, 12];
document.getElementById("para9-a").innerHTML = "Array Items : "+ smallest_num_check.join(", ");
let smallest_num_result = Math.min(...smallest_num_check);
document.getElementById("para9-b").innerHTML = "The smallest number is " + smallest_num_result;

// 10

let multiple_of_5 = "";
for (let i = 1; i <= 20; i++){
    multiple_of_5 += (5 * i) + ", "
}
document.getElementById("para10").innerHTML = multiple_of_5;