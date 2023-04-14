const fizzbuzz = require("./fizzbuzz");

describe("fizzbuzz", ()=>{
    test("imprime fizz si el numero es multiplo de 3, buzz si es multiplo de 5 y fizzbuzz si cumple con ambas", () =>{
        const expected = "fizzbuzz" || "fizz" || "buzz" ;
        const result = fizzbuzz(15);
        expect(expected).toBe(result);
    })
});
