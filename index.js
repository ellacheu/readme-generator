// Packages required //
const inquirer = require('inquirer');
const fs = require('fs');
const { renderLicenseBadge, renderLicenseLink, renderLicenseSection } = require('./utils/license');

// User prompts for input //
const init = () => {
inquirer
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project'
    },    
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information of your project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines for your project',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache 2.0'],
        message: 'Select license for your project from list'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address and instructions on how to contact with additional questions:',
    }
])
.then(data => {
    const readme = generateREADME(data)
    
    return fs.promises.writeFile('readme.md', readme)
})


.then (() => console.log('Done!'))
.catch (err => console.log(err))

// function to generate ReadMe.md // 
function generateREADME(data) {
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);


    const template = `
    # ${data.title}

    ![License]${licenseBadge}

    ## Description
    ${data.description}


    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
        
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${licenseLink} 

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    If you have any questions, please contact me:
    GitHub: [${data.github}](https://github.com/${data.github})
    Email: ${data.email}
    `;
    return template;

}
};

// Function call to initialize app
init();
