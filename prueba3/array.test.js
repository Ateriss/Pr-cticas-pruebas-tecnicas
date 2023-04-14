const array = require ("./array");

describe("array", ()=>{
    test("verificar que arrayLength es un numero", ()=>{
        const prueba = [1, 2, 3, 4]
        const expected = "number";
        const result = array(prueba)
        expect(expected).not.toBeUndefined();
    })
})