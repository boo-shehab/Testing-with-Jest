const Exercise = require('./Exercise.js');

let exercise = new Exercise();
test('ahmed == 5', () => {
    expect(exercise.stringLength("ahmed")).toBe(5);
});

test('expect an error', () => {
  expect(() => { exercise.stringLength('')}).toThrow('error the string is lees then 1 or loger then 10');
});

test('expect an error', () => {
  expect(() => { exercise.stringLength('Ahmed abas al-ali')}).toThrow('error the string is lees then 1 or loger then 10');
});

test('ahmed == demha', () => {
    expect(exercise.reverseString('ahmed')).toBe('demha');
});

describe('math group', () => {
    test('1 + 1 == 2', () => {
        expect(exercise.add(1, 1)).toBe(2);
    });
    test('1 - 1 == 0', () => {
        expect(exercise.subtract(1, 1)).toBe(0);
    });
    test('5 * 5 == 25', () => {
        expect(exercise.multiply(5, 5)).toBe(25);
    });
});

test('ahmed abas al-ali', () => {
    expect(exercise.capitalize("ahmed abas al-ali")).toBe('Ahmed Abas Al-ali')
})