import { sentry } from '@hono/sentry'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { secureHeaders } from 'hono/secure-headers'
import { api } from './api'
import { Home } from './features/home'

type Bindings = {
  SENTRY_DSN: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.use(secureHeaders())
app.use(logger())
app.use('*', sentry())

app.route('/api', api)

app.get('/home', (c) => {
  return c.html(<Home />)
})

export default app
