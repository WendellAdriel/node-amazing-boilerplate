import createServer from './create-server'
import { env } from 'config'

const port = process.env.PORT || env.port
const app = createServer()

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }

  if (env.devMode) {
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
})
