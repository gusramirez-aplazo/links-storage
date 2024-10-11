import { Hono } from 'hono'

const api = new Hono()

api.post('/save/url', async (c) => {
  const formData = await c.req.formData()
  const url = formData.get('url')

  if (!url) {
    return c.html(<span class="is-danger">Url es requerida</span>)
  }

  return c.html(<span class="is-success">Url guardada</span>)
})

export { api }
