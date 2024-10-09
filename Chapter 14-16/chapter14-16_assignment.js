// 1
/*
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
*/
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

