const divide = require("./divide.js");

test("Dividindo 6 por 2 para dar 3", () => {
	expect(divide(6, 2)).toBe(3);
});

test("Dividindo 5 por 0", () => {
	expect(() => divide(5, 0)).toThrow(`Não pode dividir por zero`);
});
