// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {readFile, writeFile} = require('fs').promises;

// TODO: Create a function to write README file
fs = {
    promises: {
        writeFile: function generateREADME(data) {
        const template = `
        # ${data.title}
        
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
        ${data.license}
        
        ## Contributing
        ${data.contributing}
        
        ## Tests
        ${data.tests}
        
        ## Questions
        If you have any questions, please contact me:
        GitHub: [${data.github}](https://github.com/${data.github})
        Email: ${data.email}
    `;

    fs.writeFile('readme.json', template, (err) => {
        if (err) {
        console.error(err);
        return;
        }
        console.log('README file generated successfully!');
         });

     },
    
     readFile: function readmeGenerated() {
        fs.promises.readFile('readme.json', 'utf-8', (err,data)=> {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data read', data)
        }); 
     }
    }
}

// TODO: Create an array of questions for user input
let readInfo
inquirer
.prompt ([
    {
        type: 'input',
        name: 'Title',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Enter a description of your project'
    },    
    {
        type: 'input',
        name: 'Installation',
        message: 'Enter installation instructions for your project',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Enter usage information of your project',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Enter contribution guidelines for your project',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'Enter test instructions for your project'
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     choices:
    //     message: 'Select license for your project from list'
    // },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter GitHub username:',
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'Enter email address and instructions on how to contact with additional questions:',
    }
])
.then(data => {
    readInfo = data
    return fs.promises.readFile('readme.json', 'utf-8')
    console.log(data)
})
.then((answers) => {
    const parsedData = JSON.parse(answers);
    parsedData.push(readInfo)
    return fs.promises.writeFile('readme.json', JSON.stringify(parsedData))
})
.then (() => console.log('Done!'))
.catch (err => console.log(err))

// TODO: Create a function to initialize app
function init() {}

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

// Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.