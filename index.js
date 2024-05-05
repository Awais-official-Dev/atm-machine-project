#! /usr/bin/env Node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 100000;
let myPin = 1122;
console.log(chalk.blue(`for testing your pin is ${myPin} and your balance is ${myBalance} `));
console.log(chalk.blue("Welcome to AWAIS - ATM Machine"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: " ENTER YOUR PIN:",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.blue("YOUR PIN IS CORRECT - LOGIN SUCCESSFULLY!"));
    let operationsAnswer = await inquirer.prompt([
        {
            name: "operations",
            type: "list",
            message: "SELECT YOUR OPERATION:",
            choices: ["BALANCE ENQUIRY", "WITHDRAW", "DEPOSIT", "EXIT"]
        }
    ]);
    if (operationsAnswer.operations === "BALANCE ENQUIRY") {
        console.log(chalk.blue(`YOUR CURRENT BALANCE IS ${myBalance}`));
    }
    else if (operationsAnswer.operations === "WITHDRAW") {
        let withdrawAnswer = await inquirer.prompt([{
                name: "withdraw",
                type: "number",
                message: "ENTER THE AMOUNT YOU WANT TO WITHDRAW:",
            }]);
        if (withdrawAnswer.withdraw > myBalance) {
            console.log(chalk.red("INSUFFICIENT BALANCE"));
        }
        else {
            myBalance -= withdrawAnswer.withdraw;
            console.log(chalk.blue(` ${withdrawAnswer.withdraw} withdraw successfully `));
            console.log(chalk.blue(`YOUR REMAINING BALANCE IS ${myBalance}`));
        }
    }
    else if (operationsAnswer.operations === "DEPOSIT") {
        let depositAnswer = await inquirer.prompt([{
                name: "deposit",
                type: "number",
                message: "ENTER THE AMOUNT YOU WANT TO deposit:",
            }]);
        if (depositAnswer.deposit > 0) {
            myBalance += depositAnswer.deposit;
            console.log(chalk.green(` ${depositAnswer.deposit} deposit successfully `));
            console.log(`YOUR REMAINING BALANCE IS ${myBalance}`);
        }
    }
    else if (operationsAnswer.operations === "EXIT") {
        console.log(chalk.red("THANK YOU FOR USING AWAIS ATM MACHINE"));
    }
}
else {
    console.log(chalk.red("INCORRECT PIN - LOGIN FAILED!"));
}
