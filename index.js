#! /usr/bin/env node
import inquirer from "inquirer";
const currencies = {
    USD: 1,
    EUR: 0.94,
    CAD: 1.38,
    INR: 83.61,
    PKR: 277.95,
    RUB: 93.32,
    BRL: 5.12,
    GBP: 0.80
};
let useranswers = await inquirer.prompt([{
        name: "fromcurrency",
        type: "list",
        message: "Choose Your From currency!!!",
        choices: ["USD", "EUR", "CAD", "INR", "PKR", "RUB", "BRL", "GBP"]
    },
    {
        name: "tocurrency",
        message: "Choose Your To Currency!!!",
        type: "list",
        choices: ["USD", "EUR", "CAD", "INR", "PKR", "RUB", "BRL", "GBP"]
    },
    {
        name: "Amount",
        message: "please Enter Your Amount You want to convert!!!",
        type: "number"
    },
]);
let fromamount = currencies[useranswers.fromcurrency];
let toamount = currencies[useranswers.tocurrency];
let Amount = useranswers.Amount;
let bamount = Amount / fromamount;
let camount = bamount * toamount;
let ramount = Math.floor(camount);
console.log(ramount);
