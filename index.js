// TODO: Include packages needed for this application
 const inquirer = require("inquirer");
 const fs = require("fs");
 const generateMarkdown = require('./utils/generateMarkdowns');
 const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
   {
       type: 'input',
       name: 'Title',
       message: 'What is the Title of your project?'
   },
   {
        type: 'input',
        name: 'Description',
        message: 'Please give a description of your project'
    },
    {
        type: 'input',
        name: 'Install',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is the usage and or uses for your application'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What kind of license does your project have?',
        choices: ["MIT License", "Apache", "GNU Lesser General Public License", "No License"]
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who are the contributors?'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'This is how you test this application'
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Do you have any questions at this time?'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is you Username for GitHub?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },
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
