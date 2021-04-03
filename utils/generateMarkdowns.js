// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GNU Lesser General Public License"){
    return `![License: GNU Lesser General Public License](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[MIT Link](https://spdx.org/licenses/MIT.html)`;
  } else if (license === "Apache") {
    return `[Apache Link](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU Lesser General Public License") {
    return `[GNU Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }  
    return "";
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) [MIT Link](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)] [Apache Link](https://opensource.org/licenses/apachepl-1.1.php)`;
  } else if (license === "GNU Lesser General Public License"){
    return `![License: GNU](https://img.shields.io/badge/License-GPL%20v2-blue.svg) [GNU Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  return "";
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {

  return ` 
  # ${responses.title}
  
  ## Description  
  ${responses.description}
  
  ## Contents Table
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](license)
  * [Contributions](contributions) 
  * [Tests](tests)
  * [Questions](questions) 

  ## Installation
  ${responses.install}

  ## Usage
  ${responses.usage}

  ## License
  ${renderLicenseSection(responses.license)}
 

  ## Contributions
  ${responses.contributions}
  
  ## Tests
  ${responses.test}

  ## Questions

  Reach out to me via Github if there are any questions! Otherwise use my email!:

  Github: [${responses.github}](https://www.github.com/)

  Email: ${responses.email}
  

`;
}

module.exports = generateMarkdown;
