// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 if (license == 'Apache 2.0 License'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
 }else if (license == 'Mozilla Public License 2.0'){
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
 }else if (license == 'The MIT License'){
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
 }else{
      return '';
 }
 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 const licenseBadge =  renderLicenseBadge(data.license);

  return `# ${data.projectTitle}

  ${licenseBadge}

  ## Description:
  
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributings](#contributings)
  * [Tests](#tests)
  * [Questions](#questions)
  

  #
  ## Installation

  ${data.installation}

  #
  ## Usage

  ${data.usage}

  #
  ## Contributings

  ${data.contributings}

  #
  ## Tests

  ${data.tests}

  #
  ## Questions
  This is my profile on GitHub: [@${data.repoName}](${data.repoName})

  If you have any additional questions, don't hesitate to email me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
