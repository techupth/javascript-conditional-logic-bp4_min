//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";
let result;
lightBulbStatus == "On" ? result = "Light bulb is On." : lightBulbStatus == "Off" ? result = "Light bulb is Off." : result = "Please choose the correct input (On/Off)";
console.log(result);