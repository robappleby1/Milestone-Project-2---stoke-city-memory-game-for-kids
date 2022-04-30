/**
 * @jest-environment jsdom
 */

 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

const shuffle = require('./script.js');

//check existence of shuffle function
test('shuffle function exists', () => {
    expect(typeof shuffle) === ('function');
})

//shuffle test given a mock value to test the variable function.//
test('shuffle function works and shuffles array', () => {
    beforeEach(() => {
        jest.spyOn(global.math, 'random').mockReturnValue(0.777777);
    });

    afterEach(() => {
        jest.spyOn(global.math, 'random').mockRestore();
    })
})
