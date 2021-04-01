// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GMU"){
    return `![License: "GMU"](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  } else if (license === "") {
    return "";
  }
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
  } else if (license === "") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  # ${data.email}
  # ${data.license}

`;
}

module.exports = generateMarkdown;
