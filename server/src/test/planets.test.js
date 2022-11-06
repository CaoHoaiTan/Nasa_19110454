const app = require('../app');
const request = require('supertest');

describe('GET /planets', function () {
    it('responds with json', async function () {
        const response = await request(app)
            .get('/planets/')
            .set('Accept', 'application/json')
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        expect(response.status).toEqual(200);
    });
});