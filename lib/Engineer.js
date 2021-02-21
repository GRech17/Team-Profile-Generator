const Employee = require('./Employee');

// engineer class
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.title = 'Engineer';
    }
    getGithub() {return this.github}
    getTitle(){return this.title}
}

module.exports = Engineer