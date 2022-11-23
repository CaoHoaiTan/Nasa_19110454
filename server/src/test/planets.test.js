const app = require('../app');
const request = require('supertest');
const {
    connect,
    close
} = require('../services/mongo');


describe('GET /planets', function () {
    beforeAll(async () => {
        await connect();
    });

    afterAll(async () => {
        await close();
    });
    it('responds with json', async function () {
        const response = await request(app)
            .get('/planets/')
        expect(response.status).toEqual(200);
    });
});