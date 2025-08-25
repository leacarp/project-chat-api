import { expect, test, describe } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    // Preparacion, creacion de variables
    const a = 1;
    const b = 2;

    // Estimulo, functions o calculos
    const result = sum(a, b);

    // El comportamiento/resultado esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const numbersArray = [];

    const result = addArray(numbersArray);

    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    const numbersArray = [1, 2, 3, 4, 5];

    const result = addArray(numbersArray);

    expect(result).toBe(15);
  });
});
