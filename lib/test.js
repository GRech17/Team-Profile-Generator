const inquirer = require("inquirer");

const collectInput = async (inputs = []) => {
    const prompts = [
        {
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: "list",
            name: "title",
            message: "What is your job title within the company?",
            choices: ["Engineer", "Intern"],
        },
        {
            name: 'email',
            message: 'What is your email?',
        },
        {
            name: 'github',
            message: 'What is your github?',
            when: function (answers) {
                // Only run if user set a position
                if (answers.title == "Engineer") {
                    return !!answers.title;
                }
            },
        },
        {
            name: 'school',
            message: 'What is your school?',
            when: function (answers) {
                // Only run if user set a position
                if (answers.position == "Intern") {
                    return !!answers.position;
                }
            },
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Enter another input? ',
            default: true
        },
    ];

    const { addEmployee, ...answers } = await inquirer.prompt(prompts);
    const newInput = [...inputs, answers];
    return addEmployee ? collectInput(newInput) : newInput;
};

const init = async () => {
    const input = await collectInput();
    console.log(input);
    //generateTeamHtml(answers)
    createEmployee(input);
};

init(); 