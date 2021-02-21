//general employee class
class Employee {
    constructor(name, id, email) {
        this.id = id,
        this.email = email;
        this.name = name;
        this.title = 'Employee';
    }
    getName(){return this.name}
    getTitle(){return this.title}
    getId(){return this.id}
    getEmail(){return this.email}
}

module.exports = Employee; 