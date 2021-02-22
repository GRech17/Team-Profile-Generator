const Employee = require('./Employee')

// manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
    getOfficeNumber(){return this.officeNumber}
    getTitle(){return this.title}
}

module.exports = Manager

// creates manager html build
function createManager(name, id, email, officeNumber) {
    let M = new Manager(name, id, email, officeNumber);
    return (`
    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>${M.getName()}</h2>
            <h3><i class="fas fa-tasks"></i> ${M.getTitle()}</h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: ${M.getId()}</p>
                <p>Email: <a href = 'mailto:${M.getEmail()}'>${M.getEmail()}</a></p>
                <p>Office Number: ${M.getOfficeNumber()}</p>
            </div>
        </div>
    </div>
    `);
}

module.exports = createManager 