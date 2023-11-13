const assert = require('assert');
const calculator = require('../script');

// Test addition
assert.strictEqual(calculator.add(2, 3), 5);

assert.strictEqual(calculator.subtract(5, 3), 2);
assert.strictEqual(calculator.multiply(2, 4), 8);

// Добавим тест-кейс для деления на 0
assert.throws(() => calculator.divide(5, 0), /Cannot divide by zero/);






