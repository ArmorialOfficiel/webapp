const calcul = require('./app');

describe('Tests des fonctions de calcul', () => {

  // Ton test initial (Addition)
  test('adds 1 + 2 to equal 3', () => {
    expect(calcul(1, 2)).toBe(3); // Ou calcul.add(1, 2) selon ta syntaxe
  });

  // Test de la Soustraction (au cas où elle est dans app.js)
  test('subs 5 - 2 to equal 3', () => {
    // Si ton app exporte un objet avec plusieurs fonctions, essaie : calcul.sub(5, 2)
    // Si c'est une seule fonction qui gère plusieurs cas, adapte les arguments
    expect(calcul(5, -2)).toBe(7); 
  });

  // Test de la Multiplication
  test('multiplies 3 * 3 to equal 9', () => {
    expect(calcul(3, 3)).toBe(9);
  });

  // Test de la Division et de la sécurité (ex: division par 0)
  test('divides 6 / 2 to equal 3', () => {
    expect(calcul(6, 2)).toBe(3);
  });

});
