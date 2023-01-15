const request = require("supertest");

const server = require('../src/shared/infra/http/server');

test('Must respond on port 3000', () => {
    return request(server).get("/")
        .then(res => expect(res.status).toBe(200));
});

test('Must return products', () => {
    return request(server)
            .get("/products/lenovo")
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.body.length).toBeGreaterThan(0);
            })
})