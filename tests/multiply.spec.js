const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('Should multiply two numbers correcty', () => {
    const result = multiply(3, 4);
    expect(result).toBe(12);
  });

  test('Should return the same number if one argument', () => {
    const result = multiply(3);
    expect(result).toBe(3);
  });
});