const createManager = require('../src/managerTemplate')
const createEngineer = require('../src/engineerTemplate');
const createIntern = require('../src/internTemplate');

let createEmployee = (input) => {
    let htmlArray = [];
    input.forEach((input, index) => {
        let name = input.name;
        let id = index + 1;
        let email = input.email;

        if(input.title === 'Engineer') {
            let github = input.github;
            htmlArray.push(createEngineer(name, id, email, github));
        } else if (input.title === 'Intern'){
            let school = input.school;
            htmlArray.push(createIntern(name, id, email, school));
        } else if(input.title === 'Manager'){
            let officeNumber = input.officeNumber;
            htmlArray.push(createManager(name, id, email, officeNumber));
        }
        })
    return htmlArray.join('');
}

module.exports.createEmployee = createEmployee;