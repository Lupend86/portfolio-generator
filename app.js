const inquirer = require("inquirer");
const { truncate } = require("lodash");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your username!')
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]);
};
  
  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);

   // If there's no 'projects' array property, create one
   if (!portfolioData.projects) {
    portfolioData.projects = [];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the name of your project!')
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please provide a description for your project!')
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter Github link to your project!')
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
  };
  promptUser()
  
    /* .then(answers => console.log(answers)) */
    .then(promptProject)
    /* .then(projectAnswers => console.log(projectAnswers)); */
    .then(portfolioData => {
      console.log(portfolioData);
    });
  
  
    
  

/* const fs = require('fs');
const generatePage = require('./src/page-template');

const pageHTML = generatePage(name, github);

fs.writeFile('index.html', pageHTML, err => {
    if (err) throw err;

    console.log('Portfolio complete! Checkout index.html to see the output!');
});
 */

/* const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i+= 1) {
      console.log(profileDataArr[i]);
    }

    console.log('================');

    // is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArgs);  */