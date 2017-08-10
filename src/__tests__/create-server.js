import createServer from 'instreets/create-server'
import request from 'supertest'

const app = createServer()

global.describe('Application is up', () => {
  global.it('Application is running', async () => {
    const res = await request(app.listen()).get('/')
    global.expect(res.status).toBe(200)
  })
})
