// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n 
  Description about the app: ${data.description} \n 
  
  Information on this app: ${data.usageInformation} \n 
  Contributors: ${data.contribution} \n
  Instructions: ${data.testInstructions} \n 
  Github user name: ${data.github} \n 
  Email: ${data.email}`
}

module.exports = generateMarkdown;
