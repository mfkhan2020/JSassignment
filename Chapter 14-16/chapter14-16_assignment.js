// 1

let students_literal = [];
students_literal.push("Ali");
students_literal.push("Rizwan");
students_literal.push("Adil")
document.getElementById("para1").innerHTML = students_literal.join(" , ");

// 2

let students_object = {
    student_names : []
}
students_object.student_names.push("Faizan");
students_object.student_names.push("Raheel");
students_object.student_names.push("Umair");
document.getElementById("para2").innerHTML = students_object.student_names.join(" , ");

// 3

let string_array = ["Faheem" , "Imran" , "Zahid" , "Shahid"];
document.getElementById("para3").innerHTML = string_array.join(" , ");

// 4

let num_array = [12 , 15 , 70 , 45 , 36 , 91];
document.getElementById("para4").innerHTML = num_array.join(" , ");

// 5

let boolean_array = [true , false];
document.getElementById("para5").innerHTML = boolean_array.join(" , ");

// 6

let mixed_array = ["Imtiaz" , 65 , true];
document.getElementById("para6").innerHTML = mixed_array.join(" , ");

// 7

let edu_qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"];
let edu_no = 0;
let edu_string = "";
for (let i = 0; i < edu_qualifications.length; i++){
    edu_string += ++edu_no + ")" + " " + edu_qualifications[i] + "<br>";
    console.log(edu_string);
}
document.getElementById("para7").innerHTML = edu_string;

// 8

let stu_name = ["Michael", "John", "Tony"];
let stu_score = [320, 230, 480];
let stu_total = 500;
let stu_string = "";
//document.getElementById("para8").innerHTML = "Score of" + stu_name[0]
for(let i = 0; i<stu_name.length; i++){
    stu_string += "Score of " + stu_name[i] + " is " + stu_score[i] + " Percentage : " + (stu_score[i] / stu_total) * 100 + "%" + "<br>";
}
console.log(stu_string);
document.getElementById("para8").innerHTML = stu_string;


// 9

let color_names = ["Blue", "yellow", "Red", "Green", "White",]
document.getElementById("para9").innerHTML = color_names.join(", ");

// 9-a 

let user_color_start = prompt("What color you want to add in the begingin");
color_names.unshift(user_color_start);
document.getElementById("para9-a").innerHTML = color_names.join(", ");

// 9-b
let user_color_end = prompt("What color you want to add in the end");
color_names.push(user_color_end);
document.getElementById("para9-b").innerHTML = color_names.join(", ");

// 9-c
color_names.unshift("Pink", "Orange");
document.getElementById("para9-c").innerHTML = color_names.join(", ");

// 9-d
color_names.shift();
document.getElementById("para9-d").innerHTML = color_names.join(", ");

// 9-e
color_names.pop();
document.getElementById("para9-e").innerHTML = color_names.join(", ");

// 9-f

let user_color_index_no = prompt("At which index you want to add a color eg: 0, 1, 2 ...  ");
let user_color_name = prompt("Which color you want to add");
color_names.splice(user_color_index_no, 0, user_color_name);
document.getElementById("para9-f").innerHTML = color_names.join(", ");
 
// 9-g

let user_color_index_del = prompt("At which index you want to delete a color eg: 0, 1, 2 ...  ");
let user_color_qty_del = prompt("How many colors you want to delete e.g : 1, 2 ....");
color_names.splice(user_color_index_del, user_color_qty_del);
document.getElementById("para9-g").innerHTML = color_names.join(", ");


// 10

let student_score = [320, 230, 480, 120];
document.getElementById("para10-a").innerHTML = "Scores of Students : " + student_score.join(", ");
let student_score_ascending_order = student_score.sort();
document.getElementById("para10-b").innerHTML = "Ordered Scores of Students : " + student_score_ascending_order.join(", ");

// 11

let cities_names = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selected_cities = cities_names.slice(1, 4);
document.getElementById("para11-a").innerHTML = "Cities List : " + cities_names.join(", ");
document.getElementById("para11-b").innerHTML = "Selected Cities List : " + selected_cities.join(", ");

// 12

let arr = ["This" , " is ", " my ", " cat"];
document.getElementById("para12-a").innerHTML = "Array : " + arr;
document.getElementById("para12-b").innerHTML = "String : " + arr.join(" ");

// 13 Very Difficult Not understand
/*
let devices_arr = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.getElementById("para13-a").innerHTML = "Devices : " + devices_arr.join(", ");
let output_devices_result = " ";
let devices_arr_length = devices_arr.length;
for (let i = 0; i < devices_arr_length; i++){
    let out_device_loop = devices_arr.shift();
    output_devices_result += out_device_loop;
    document.getElementById("para13-b").innerHTML = "Devices Out : " + output_devices_result + "</br>";
}
*/

// 14


// 15

let phone_manufactorer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let phone_list_loop = "";
for (let i = 0; i < phone_manufactorer.length; i++){
    //document.getElementById("para15").innerHTML = "<option>" + phone_manufactorer +"</option>";
    phone_list_loop += "<option>" + phone_manufactorer[i] +"</option>";
}
document.getElementById("para15").innerHTML = "<select>" + phone_list_loop +"</select>";

