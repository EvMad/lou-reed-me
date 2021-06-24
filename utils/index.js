// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const tacoMaker = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Enter project description:',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Enter project installation details:',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Enter project usage details:',
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'Enter project contribution details:',
        },

        {
            type: 'input',
            name: 'tests',
            message: 'Enter project test details:',
        },

        {
            type:'list',
            name: 'license',
            message: 'choose a license',
      choices: ['MIT', 'Apache', 'Mozilla', 'ODC'],
    }


    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateReadMe = (answers) => {

    let license;

    if (answers.license = license.choices[0]) license.badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    else if (answers.license = license.choices[1]) license.badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    else if (answers.license = license.choices[2]) licsense.badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    else if (answers.license = license.choices[3]) license.badge = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';
    
   


    console.log(answers)
    return `
    #**${answers.title}**

    ##ABOUT
    
    ${answers.description}
    
    ## INSTALLATION
    
    ${answers.installation}
    
    ## USAGE
    
    ${answers.usage}
    
    ### Contributors
    
    ${answers.contributing}
    
    ### Tests
    
    ${answers.test}
    
    ### License
    
    ${answers.license}
    
    ${license.badge}
    `;
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('fakeREADME.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to fakeREADME.md'))
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README