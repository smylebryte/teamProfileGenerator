const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamMembers = [];


function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
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
            name: 'managerOffice',
            message: "What is the team manager's office number?"
        }
    ]).then((responses) => {
        console.log(responses);
        const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOffice);
        teamMembers.push(manager);
        addTeamMember();
    })
};

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's id?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the engineer's Github?"
        }
    ]).then((responses) => {
        console.log(responses);
        const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub);
        teamMembers.push(engineer);
        addTeamMember();
    })
};

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school?"
        }
    ]).then((responses) => {
        console.log(responses);
        const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
        teamMembers.push(intern);
        addTeamMember();
    })
};

function addTeamMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]).then(choice => {
        switch (choice.teamMember) {
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                createTeam();
        }
    })
};


function createTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMember), "utf-8");
}

createManager();