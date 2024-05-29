#! /usr/bin/env node
import inquirer from "inquirer";

const answers :{
    sentence : string 
} = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence to count the word:",
        type: "input"
    }
]);

const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);

