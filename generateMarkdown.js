// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n 
  ## Table of contents
  [Description](#description)
  # Description: ${data.description} \n 
  [Information](#information)
  # Information: ${data.usageInformation} \n 
  [License](#license)
  # License: ${data.license} \n
  [Contributors](#contributors)
  # Contributors: ${data.contribution} \n
  [Instructions](#instructions)
  # Instructions: ${data.testInstructions} \n
  Questions, please contact me:  \n
  Github user name: ${data.github} \n 
  Email: ${data.email}`
}
module.exports = generateMarkdown;
