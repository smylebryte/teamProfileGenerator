const inquirer = require("inquirer")

const questions = [
    {
        type: 'input',
        name: 'manager',
        message: "What is the team manager's name?"
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email address?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?"
    },
    {
        type: 'list',
        name: 'teamMember',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    },
];

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses)
    })
}

init();