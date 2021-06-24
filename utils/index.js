// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const answers = () => {
    return inquirer.prompt([
        {
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
    
        
    ])
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const generateReadMe = (answers) =>
``;

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
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