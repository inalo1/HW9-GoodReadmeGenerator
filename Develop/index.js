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
        type: 'checkbox',
        message: 'Check all that was used',
        choices: ["HTML", "CSS", "Javascript", "Python", "Java"],
        name: 'technologies',
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

`# ${response.title}

## Overview
*${response.description}*

# Table of Content:
* [Technologies Used](#technologies-used)
* [Installation Instruction](#installation-instruction)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [License](#license)
* [Questions](#questions)

## Technologies Used
${response.technologies}

## Installation Instructions
${response.installationInstructions}

## Usage Information
${response.usageInformation}

## Contribution Guidelines
${response.contributionGuidelines}

## Test Instructions
${response.testInstructions}

## License
Licensed under the ${response.license} license.

## Questions
Feel 
* [github](https://github.com/${response.githubUsername})
* [email](${response.eMail})

© 2020 Microsoft Corporation. Confidential and Proprietary. All Rights Reserved.
`;
   
userInput()
.then((response) => writeFileAsync('README.md', generateREADME(response)))
.then(() => console.log('Successfully wrote to README.md'))
.catch((err) => console.error(err));
    

