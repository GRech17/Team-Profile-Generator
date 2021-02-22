// generate data
const inquirer = require('inquirer');

const generateManager = async () => {
    let data;
    await inquirer.prompt([
        {
            message: 'Create a work team. First, list the managers name:',
            name:'name'
        },
        {
            name: 'id',
            message:'Enter managers ID #:'
        },
        {
            name: 'email',
            message: 'Enter managers email:'
        },
        {
            name:'officeNumber',
            message:'Enter managers office number:'
        },
    ])
    .then(answers => {
        answers.title = 'Manager';
        answers.id = 1;
        data = answers;
    })
    return data;
};

const employeePrompts = async (input = []) => {
    if (input.length === 0) {
        const managerData = await generateManager();
        input.push(managerData);
    }

    const prompts = [
        {
            type: 'list',
            name: 'title',
            message: 'Create a new employee. List their job title:',
            choices:['Engineer', 'Intern']
        },
        {
            name:'name',
            message:'Enter employees name:'
        },
        {
            name:'id',
            message:'Enter employees ID #:'
        },
        {
            name:'email',
            message:'Enter employees email:'
        },
        {
            name:'github',
            message:'Enter employees github:',
            when: function (answers) {
                if (answers.title == 'Engineer') {
                    return !!answers.title;
                }
            }
        },
        {
            name:'school',
            message:'Enter employees school:',
            when: function (answers) {
                if (answers.title == 'Intern') {
                    return !!answers.title;
                }
            }
        },
        {
            type:'confirm',
            name:'addEmployee',
            message:'Add employee?',
            default:true
        },
    ];

    const {addEmployee, ...answers} = await inquirer.prompt(prompts);
    const newInput = [...input, answers];
    return addEmployee? employeePrompts(newInput):newInput;
};

module.exports.employeePrompts = employeePrompts;


