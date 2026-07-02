const request = require('supertest');
const app = require('./app'); // Assure-toi que le chemin vers ton app Express est correct

describe('Tests de l\'application WebApp', () => {
  
  // Test de la route d'accueil (GET /)
  it('devrait répondre avec un statut 200 sur la route /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    // Optionnel : expect(res.text).toContain('Bienvenue'); 
  });

  // Test d'une route API ou d'une autre page (ex: GET /api/health)
  it('devrait retourner le statut de l\'application sur /health', async () => {
    const res = await request(app).get('/health');
    if (res.statusCode === 200) {
      expect(res.body).toHaveProperty('status', 'UP');
    }
  });

  // Test de la gestion des erreurs 404 (Route inconnue)
  it('devrait retourner une erreur 404 pour une route inexistante', async () => {
    const res = await request(app).get('/route-qui-n-existe-pas');
    expect(res.statusCode).toEqual(404);
  });

});
