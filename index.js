// link to employee info
const employeePrompts = require('./src/employeePrompts').employeePrompts;
const generateHTML = require('./src/generateHTML').generateHTML;

// initializes app
const init = async () => {
    const input = await employeePrompts();
    generateHTML(input);
    console.log(input);
};

// calls function to initialize app
init();