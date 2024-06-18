//Exercise 4
// Switch Statement
let lightBulbStatus = "Broken";
lightBulbStatus = "Off"
let result;
switch(lightBulbStatus){
    case "On" :
        result = "Light bulb is On.";
        break;
    case "Off":
        result = " Light bulb is Off.";
        break;
    case "Broken":
        result = " Light bulb is Broken.";
        break;
    default:
        result = "Please choose the correct input (On/Off/Broken)"
}
console.log(result);
lightBulbStatus = "Off";
console.log(result);
//Start coding here