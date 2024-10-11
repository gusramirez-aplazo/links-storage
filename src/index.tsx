import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { api } from './api'
import { Home } from './features/home'

const app = new Hono()

app.use(secureHeaders())
app.use(logger())

app.route('/api', api)

app.get('/home', (c) => {
  return c.html(<Home />)
})

export default app
