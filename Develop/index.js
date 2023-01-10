// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projTitle",
        message: "what is title of the project"
    },
    {
        type: "input",
        name: "description",
        message: "what is description of the project?"
    },
    {
        type: "input",
        name: "installation",
        message: "what is installation steps of the project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use the project:"
    },
    {
        type: "list",
        name: "license",
        message: "choose one license",
        choices: ['The MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0']
    },
    {
        type: "input",
        name: "contributings",
        message: "Describe how to contribute to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Describe how to test to your project?"
    },
    {
        type:"input",
        name:"repoName",
        message:"what the name of the repository?"
    },
    {
        type:"input",
        name:"email",
        message:"what is your Email?"
    }


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt( questions).then(function(response){
        
        let data = {projectTitle: response.projTitle,
                    description : response.description,
                    installation : response.installation,
                    usage  :response.usage,
                    license: response.license,
                    contributings : response.contributings,
                    tests : response.tests,
                    repoName : response.repoName,
                    email : response.email
                };
        console.log(data);
       let readMeContent =  generateMarkdown(data);
       fs.writeFile('GeneratedSampleREADME.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
    });
}

// Function call to initialize app
init();
