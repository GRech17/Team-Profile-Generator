const Engineer = require('../lib/Engineer');

test('can set github account', () => {
    const testValue = 'GitHubUser';
    const en = new Engineer('foo', 1, 'test@test.com', testValue);
    expect(en.github).toBe(testValue);
});

test('getTitle should return "engineer"', () => {
    const testValue = 'Engineer';
    const en = new Engineer('foo', 1, 'test@test.com', 'GitHubUser');
    expect(en.getTitle()).toBe(testValue);
});

test('can get github via getGithub()', () => {
    const testValue = 'GitHubUser';
    const en = new Engineer('foo', 1, 'test@test.com', testValue);
    expect(en.getGithub()).toBe(testValue);
});