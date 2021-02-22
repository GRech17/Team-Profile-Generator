const Engineer = require('../lib/Engineer');

// creates engineer html build
function createEngineer(name, id, email, github) {
    let E = new Engineer(name, id, email, github);
    return (`
    <div class="teamMember">
        <div class="teamMemberHeading">
            <h2>${E.getName()}</h2>
            <h3><i class="fas fa-code"></i> ${E.getTitle()}</h3>
        </div>
        <div class="teamMemberBody">
            <div>
                <p>ID: ${E.getId()}</p>
                <p>Email: <a href = 'mailto:${E.getEmail()}'>${E.getEmail()}</a></p>
                <p>GitHub: <a href = 'https://github.com/${E.getGithub()}'>${E.getGithub()}</a></p>
            </div>
        </div>
    </div>
    `);
}

module.exports = createEngineer