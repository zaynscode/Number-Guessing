#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Zain's Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess Number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congratulations!You guess a correct Number.");
}
else {
    console.log("Sorry,you guess a wrong number");
}
