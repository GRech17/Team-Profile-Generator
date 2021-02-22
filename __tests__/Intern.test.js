const Intern = require("../lib/Intern");

test("Can set school", () => {
    const testValue = "UCLA";
    const I = new Intern("Foo", 1, "test@test.com", testValue);
    expect(I.school).toBe(testValue);
});

test('getTitle() should return "Intern"', () => {
    const testValue = "Intern";
    const I = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(I.getTitle()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const I = new Intern("Foo", 1, "test@test.com", testValue);
    expect(I.getSchool()).toBe(testValue);
}); 