import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { WEBPAGE_PATTERN } from '../features/shared/config/webpage'

const api = new Hono()

api.post(
  '/save/url',
  validator('form', (value, c) => {
    const url = value.url

    if (!url) {
      return c.html(<span class="is-danger">Url es requerida</span>, 400)
    }

    const isValidPattern = WEBPAGE_PATTERN.exec(url.toString()) != null

    if (!isValidPattern) {
      return c.html(
        <span class="is-danger">Url no cumple el formato requerido</span>,
        400
      )
    }

    return { url }
  }),
  async (c) => {
    const data = await c.req.valid('form')

    return c.html(<span class="is-success">Url guardada</span>)
  }
)

export { api }
