const app = require('../app');
const request = require('supertest');

describe('GET /lauches', function () {
    it('responds with json', function () {
        return request(app)
            .get('/launches/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toBeInstanceOf(Array);
            })
    });
});

describe('POST /launches', function () {
    it('responds with success', function () {
        return request(app)
            .post('/launches/')
            .send({
                mission: 'USS Enterprise',
                rocket: 'NCC-1701-D',
                target: 'Kepler-186 f',
                launchDate: 'October 31, 2022',
            })
            .expect(201)
            .then(response => {
                expect(response.body).toMatchObject({
                    mission: 'USS Enterprise',
                    rocket: 'NCC-1701-D',
                    target: 'Kepler-186 f',
                    launchDate: '2022-10-30T17:00:00.000Z',
                    upcoming: true,
                    success: true,
                });
            });
    });
});

describe('DELETE /launches', function () {
    it('responds with success', function () {
        return request(app)
            .delete('/launches/101')
            .expect(200)
            .then(response => {
                expect(response.body).toMatchObject({
                    mission: 'USS Enterprise',
                    rocket: 'NCC-1701-D',
                    target: 'Kepler-186 f',
                    launchDate: '2022-10-30T17:00:00.000Z',
                    upcoming: false,
                    success: false,
                });
            });
    });
});

