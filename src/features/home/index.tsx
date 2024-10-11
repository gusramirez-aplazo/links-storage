import { FC } from 'hono/jsx'
import { Layout } from '../shared/layout'

export const Home: FC = () => {
  return (
    <Layout>
      <main class="container" hx-ext="response-targets">
        <h1>Guarda tus liks, simple y rápido</h1>

        <article>
          <form
            id="app-form"
            class="app-form"
            hx-post="/api/save/url"
            hx-trigger="submit"
            hx-target="#app-form--messages"
            hx-target-400="#app-form--messages"
            hx-confirm="¿Estás seguro?"
          >
            <div>
              <label for="url" class="pico-color-lime-200">
                URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                inputmode="url"
                hx-validate
              />
            </div>

            <button type="submit" class="outline ">
              Guardar
            </button>
          </form>
        </article>

        <p id="app-form--messages" hx-swap-oob="true"></p>
      </main>
    </Layout>
  )
}
