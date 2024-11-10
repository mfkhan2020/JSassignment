// 1 

let pos_int_user = Number(prompt("Enter a positive integer e.g : 1.525, 3.9865"));
document.getElementById("para1a").innerHTML = "Number : " + pos_int_user;
let int_round = Math.round(pos_int_user);
document.getElementById("para1b").innerHTML = "Round of Value : " + int_round;
let int_floor = Math.floor(pos_int_user);
document.getElementById("para1c").innerHTML = "Floor of Value : " + int_floor;
let int_ceil = Math.ceil(pos_int_user);
document.getElementById("para1d").innerHTML = "Ceil of Value : " + int_ceil;


// 2
let neg_pos_int_user = Number(prompt("Enter a negative integer e.g : -1.525, -3.9865"));
document.getElementById("para2a").innerHTML = "Number : " + neg_pos_int_user;
let neg_int_round = Math.round(neg_pos_int_user);
document.getElementById("para2b").innerHTML = "Round of Value : " + neg_int_round;
let neg_int_floor = Math.floor(neg_pos_int_user);
document.getElementById("para2c").innerHTML = "Floor of Value : " + neg_int_floor;
let neg_int_ceil = Math.ceil(neg_pos_int_user);
document.getElementById("para2d").innerHTML = "Ceil of Value : " + neg_int_ceil;

// 3
let abs_num = (Math.round(Math.random() * 10) * -1);
let result_abs_num = Math.abs(abs_num);
document.getElementById("para3").innerHTML = "The absolute value of " + abs_num + " is " + result_abs_num;

// 4
let dice_val = Math.random() * 6;
let dice_val_round = Math.ceil(dice_val);
document.getElementById("para4").innerHTML = "The random dice value is " + dice_val_round;

// 5 
let coin_val = Math.ceil(Math.random() * 2);
if (coin_val == 2){
    document.getElementById("para5").innerHTML = "Random coin value is Heads";    
}
else{
    document.getElementById("para5").innerHTML = "Random coin value is Tails";
}

// 6
let rand_num_between = Math.round(Math.random() * 100)
console.log(rand_num_between);
document.getElementById("para6").innerHTML = "Random number between 1 and 100 is : " + rand_num_between;

// 7
let user_weight_inp = prompt("Enter your weight");
document.getElementById("para7").innerHTML = "The weight of user is " + user_weight_inp + " Kilograms";


// 8
let user_rand_num = Math.round(Math.random() * 10);
let user_inp_num = prompt("Enter a number between 1 to 10 to guess.")
if (user_rand_num == user_inp_num){
    document.getElementById("para8").innerHTML = "Congratulations your number is " + user_inp_num + " and the secret number is " + user_rand_num;
}
else{
    document.getElementById("para7").innerHTML = "Try Again";
}

