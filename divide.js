function divide(a, b) {
	if (b == 0) {
		throw new Error("Não pode dividir por zero");
	}
	return a / b;
}

module.exports = divide;
