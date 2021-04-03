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
       message: 'What is the Title of your project?'
   },
   {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage and or uses for your application'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license does your project have?',
        choices: ["MIT License", "Apache", "GNU Lesser General Public License", "No License"]
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who are the contributors?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'This is where you enter steps to test this application'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions at this time?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is you Username for GitHub?'
    },
    {
        type: 'input',
        name: 'email',
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
