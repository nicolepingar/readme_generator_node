// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

  ## Description
  ${response.description}
  
  ## Table of Contents

  ## Installation
  To install necessary dependencies, run the following command:
  
      ${response.installation}

  ## Usage 
  ${response.usage}

  ## License
  ${response.licence}

  ## Contributing
  ${response.contributing}

  ## Tests
  To run tests, run the following command:

      ${response.tests}

  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at ${response.email}. You can find more of my work at ${response.username}.
`;
}
module.exports = generateMarkdown;
