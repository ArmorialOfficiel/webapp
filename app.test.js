const calcul = require('./app');

describe('Tests de la fonction calcul pour le Quality Gate', () => {

  // 1. Test pour passer dans le "else" (a est inférieur ou égal à 10)
  test('devrait additionner quand a est inférieur ou égal à 10', () => {
    expect(calcul(1, 2)).toBe(3);
  });

  // 2. Test pour passer dans le "if" (a est strictement supérieur à 10)
  test('devrait additionner quand a est supérieur à 10', () => {
    expect(calcul(15, 5)).toBe(20);
  });

});
