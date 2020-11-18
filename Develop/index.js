const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Project Description:',
            name: 'decription',
        },
        {
            type: 'input',
            message: 'Installation Instructions:',
            name: 'installation-instructions',
        },
        {
            type: 'input',
            message: 'Usage Information:',
            name: 'usage-information',
        },
        {
            type: 'input',
            message: 'Contribution Guidelines:',
            name: 'contribution-guidelines',
        },
        {
            type: 'input',
            message: 'Test Instructions:',
            name: 'test-instructions',
        },
        {
            type: 'list',
            message: 'Choose a License',
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", 
            "Apache License 2.0", "MIT License","Boost Software License 1.0", "The Unlicense"],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github-username',
        },
        {
            type: 'input',
            message: 'What is your e-mail address?',
            name: 'e-mail',
        },
    ]);


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
