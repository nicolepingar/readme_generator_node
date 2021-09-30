// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseLink(response) {
  let license = " "
  if (response.license == "MIT") {
    license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (response.license == "APACHE 2.0") {
    license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (response.license == "GPL 3.0") {
    license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (response.license == "BSD 3") {
    license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else
    license = " "

  return license
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response, questions) {
  return `# ${response.title}

  ${renderLicenseLink(response)}

  ## Description
  ${response.description}
  
  ## Table of Contents

  - [Installation](#${questions[5].name})
  - [Usage](#${questions[7].name})
  - [License](#${questions[4].name})
  - [Contributing](#${questions[8].name})
  - [Tests](#${questions[6].name})
  - [Questions](#${questions[1].name})

  ## Installation
  To install necessary dependencies, run the following command:
  
      ${response.installation}

  ## Usage 
  ${response.usage}

  ## License
  This project is licensed under the ${response.license} license.

  ## Contributing
  ${response.contributing}

  ## Tests
  To run tests, run the following command:

      ${response.tests}

  ## Questions
  If you have any questions about the repository, open an issue or contact me directly at ${response.questions}. You can find more of my work at [${response.username}](https://github.com/${response.username}).
`;
}
module.exports = generateMarkdown;
