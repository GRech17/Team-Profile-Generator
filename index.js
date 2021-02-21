// link to employee info
const employeeData = require('./lib/employeeData').employeeData;
const generateHTML = require('./lib/generateHTML').generateHTML;

// initializes app
const init = async () => {
    const input = await employeeData();
    generateHTML(input);
    console.log(input);
};

// calls function to initialize app
init();