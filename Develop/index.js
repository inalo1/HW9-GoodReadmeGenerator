const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const userInput = () =>
inquirer.prompt([
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
        name: 'installationInstructions',
    },
    {
        type: 'input',
        message: 'Usage Information:',
        name: 'usageInformation',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contributionGuidelines',
    },
    {
        type: 'input',
        message: 'Test Instructions:',
        name: 'testInstructions',
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
        name: 'githubUsername',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'eMail',
    },
]);

const generateREADME = (response) => 

    `## Project Title 
    ${response.title}

    # Description
    ${response.description}
    
    # Table of Content 

    # Installation Instructions
    ${response.installationInstructions}
    
    # Usage Information
    ${response.usageInformation}
    
    # Contribution Guidelines
    ${response.contributionGuidelines}
    
    # Test Instructions
    ${response.testInstructions}
    
    # License
    ${response.license}
    
    # Information
    ${response.githubUsername}
    ${response.eMail}
        
    `;
   
userInput()
.then((response) => writeFileAsync('README.md', generateREADME(response)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
    

