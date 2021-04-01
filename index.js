// TODO: Include packages needed for this application
 const inquirer = require("inquirer");
 const fs = require("fs");
 const generateMarkdown = require('./utils/generateMarkdowns');
 const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'title',
       message: 'What is the name of your repo?'
   },
   {
        type: 'input',
        name: 'email',
        message: 'What is the name of your email?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license does your project have?',
        choices: ['mit', 'apache', 'no license']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(responses => {
           // console.log(responses)
          const markUp = generateMarkdown(responses)
            writeToFile('README.md', markUp)
        })
}

// Function call to initialize app
init();
