const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown.js')
const path = require('path')

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your app?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description about you app?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your app?'
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Information about your app?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who contributed of your app?'
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'instructions on how to test your app?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your gitHub username?'
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