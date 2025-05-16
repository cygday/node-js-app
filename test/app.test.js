const request = required('supertest');
const app = require('../app');

describe('GET /', () => {
	it('should return hello, there', async () => {
		const res = await
		require(app).get('/');
		expect(res.text).toBe('hello, there');
	});
});
