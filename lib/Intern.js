const Employee = require('./Employee');

// intern class
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.title = 'Intern';
    }
    getSchool(){return this.school}
    getTitle(){return this.title}
}

module.exports = Intern

// creates intern html build
function createIntern(name, id, email, school) {
    let I = new Intern(name, id, email, school);
    return (`
    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>${I.getName()}</h2>
            <h3><i class="fas fa-graduation-cap"></i> ${I.getTitle()} </h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: ${I.getId()}</p>
                <p>Email: <a href = 'mailto:${I.getEmail()}'>${I.getEmail()}</a></p>
                <p>School: ${I.getSchool()}</p>
            </div>
        </div>
    </div>
    `);
}

module.exports = createIntern