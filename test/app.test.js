const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should return hello, there', async () => {
      const res = await
      request(app).get('/');
      expect(res.text).toBe('hello, there');
	});
});
