import { FC } from 'hono/jsx'
import { Layout } from '../shared/layout'

export const Home: FC = () => {
  return (
    <Layout>
      <main class="container">
        <h1>Guarda tus liks, simple y rápido</h1>

        <article>
          <form
            class="app-form"
            hx-post="/api/save/url"
            hx-trigger="submit"
            hx-target="#app-form-messages"
            hx-confirm="¿Estás seguro?"
            {...{
              'hx-on::after-request':
                'if(event.detail.successful) this.reset()',
            }}
          >
            <div>
              <label for="url" class="pico-color-lime-200">
                URL
              </label>
              <input type="text" id="url" name="url" inputmode="url" />
            </div>

            <button type="submit" class="outline ">
              Guardar
            </button>
          </form>
        </article>

        <article id="app-form-messages"></article>
      </main>
    </Layout>
  )
}
