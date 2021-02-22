const Employee = require('../lib/Employee');

test('can set Employee instance', () => {
    const em = new Employee();
    expect(typeof (em)).toBe('object');
});

test('can set name', () => {
    const name = 'Albert';
    const em = new Employee(name);
    expect(em.name).toBe(name);
});

test('can set id', () => {
    const testValue = 100;
    const em = new Employee('foo', testValue);
    expect(em.id).toBe(testValue);
});

test('can set email', () => {
    const testValue = 'test@test.com';
    const em = new Employee('foo', 1, testValue);
    expect(em.getEmail()).toBe(testValue);
});

test('can set name via getName()', () => {
    const testValue = 'Albert';
    const em = new Employee(testValue);
    expect(em.getName()).toBe(testValue);
});

test('can get id via getId()', () => {
    const testValue = 100;
    const em = new Employee('foo', testValue);
    expect(em.getId()).toBe(testValue);
});

test('can get email via getEmail()', () => {
    const testValue = 'test@test.com';
    const em = new Employee('foo', 1, testValue);
    expect(em.getEmail()).toBe(testValue);
});

test("getTitle() should return 'employee'", () => {
    const testValue = 'Employee';
    const em = new Employee('Albert', 1, 'test@test.com');
    expect(em.getTitle()).toBe(testValue);
});