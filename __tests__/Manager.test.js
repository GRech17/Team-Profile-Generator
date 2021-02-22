const Manager = require("../lib/Manager");

test("Can set office number", () => {
    const testValue = 100;
    const m = new Manager("Foo", 1, "test@test.com", testValue);
    expect(m.officeNumber).toBe(testValue);
});

test("getTitle() should return 'Manager'", () => {
    const testValue = "Manager";
    const m = new Manager("Foo", 1, "test@test.com", 100);
    expect(m.getTitle()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const m = new Manager("Foo", 1, "test@test.com", testValue);
    expect(m.getOfficeNumber()).toBe(testValue);
}); 