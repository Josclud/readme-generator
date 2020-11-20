const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
const path = require('path')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the Title of your app?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  }

];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data
  )
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (inquirerResponses) {
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }))
  })
}

// function call to initialize program
init();