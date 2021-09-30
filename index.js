// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// const { title } = require('process');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', //0
        message: "What is your GitHub username?",
        name: 'username'
    },
    {
        type: 'input', //1
        message: "What is your email address?",
        name: 'questions'
    },
    {
        type: 'input', //2
        message: "What is the title of your application?",
        name: 'title'
    },
    {
        type: 'input',//3
        message: "Please write a short description of your application.",
        name: 'description'
    },
    {
        type: 'list', //4
        message: "What kind of license should your application have?",
        name: 'license',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: 'input',//5
        message: "What command should be run to install dependencies?",
        name: 'installation',
        default: "npm i"
    },
    {
        type: 'input', //6
        message: "What command should be run to run tests?",
        name: 'tests',
        default: "npm test"
    },
    {
        type: 'input', //7
        message: "What does the user need to know about using the repo?",
        name: 'usage'
    },
    {
        type: 'input',
        message: "What does the user need to know about contributing to the repo?",
        name: 'contributing'
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, (err) =>
        err ? console.error(err) : console.log("Generating README...")
    )
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README1.md", generateMarkdown(response, questions));
        })
}
// Function call to initialize app
init();
