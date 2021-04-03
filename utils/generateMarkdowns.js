// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GMU"){
    return `![License: "GMU"](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  } 
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GMU"){
    return `![License: "GMU"](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }  
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

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
  ${renderLicenseBadge(responses.License)}
  ${renderLicenseLink(responses.License)}

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
