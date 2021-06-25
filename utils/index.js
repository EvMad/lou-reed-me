// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


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
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub user name?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

        {
            type:'list',
            name: 'license',
            message: 'choose a license',
            choices: ['MIT', 'Apache', 'Mozilla', 'ODC'],
    }


    ])

    
}



const generateReadMe = (answers) => {
console.log(answers)

const badge = {name: 'link'};

    if (answers.license == "MIT") badge.link = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    else if (answers.license == "Apache") badge.link = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    else if (answers.license == "Mozilla") badge.link = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    else if (answers.license == "ODC") badge.link = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)';


    return`
    # ${answers.title}

    ## Table of Contents
    * [About](#about)
    * [Installation](#install)
    * [Usage](#usage")
    * [Contributors](#contr)
    * [Tests](#test)
    * [License](#lice)

    <a name="about"></a>
    ##ABOUT
    
    ${answers.description}
    
    <a name="install"></a>
    ## INSTALLATION
    
    ${answers.installation}
    
    <a name="usage"></a>
    ## USAGE
    
    ${answers.usage}
    
    <a name="contr"></a>
    ### Contributors
    
    ${answers.contributing}

    [title](https://github.com/${answers.gitHub})

    Email: ${answers.email}
    
    <a name="test"></a>
    ### Tests
    
    ${answers.tests}
    
    <a name="lice"></a>
    ### License
    
    ${answers.license}

    ${badge.link}
    `;
    
    

    
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));

}

// Function call to initialize app
init();

