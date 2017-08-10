import express from 'express'

export default () => {
  const app = express()

  app.get('/', async (req, res) => {
    try {
      const result = await Promise.resolve({ message: 'Hello, world' })
      return res.json({ ...result, foo: 'bar' })
    } catch (exception) {
      return res.json({ error: exception.message })
    }
  })

  return app
}
