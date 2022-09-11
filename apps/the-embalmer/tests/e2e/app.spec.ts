import app from '../../src/infrastructure/app'

describe('App controller (e2e)', () => {
  test('/(GET) ', async () => {
    const resp = await app.inject({ method: 'GET', url: '/' })

    expect(resp.statusCode).toBe(200)
  })
})
