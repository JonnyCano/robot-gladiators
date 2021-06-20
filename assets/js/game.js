var playerName = window.prompt("What is your robot's name?");
console.log(playerName);
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};
// What is this?
// console.log(playerName);
// Note the lack of quotation marks around playerName
// window.alert(playerName);
// console.log("This log is a string, good for leaving yourself a message");
// this will do math and log 20
// console.log(10 + 10);
// what is this?
// console.log("Our robot's name is " + playerName);

// this creates a function named "fight"

//function fight() {
//   window.alert("The fight has begun!");
//}

//fight();