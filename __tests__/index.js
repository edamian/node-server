const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

it('Get nits', async (done) => {
    const response = await request.get('/api/nits');
    expect(response.status).toBe(200);
    expect(response.body.length > 0).toBeTruthy();
    done();
});

it('Get nits invalid route', async (done) => {
    const response = await request.get('/api/nitss');
    expect(response.status).toBe(404);
    done();
});

it('Get nit info', async (done) => {
    const response = await request.get('/api/nits/100000002');
    expect(response.status).toBe(200);
    expect(response.body.nit).toBe('100000002');
    done();
});

it('Get nit info invalid route', async (done) => {
    const response = await request.get('/api/nitss');
    expect(response.status).toBe(404);
    done();
});

it('Get nit info no parameter', async (done) => {
    const response = await request.get('/api/nits/100000002322');
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Not found');
    done();
});
