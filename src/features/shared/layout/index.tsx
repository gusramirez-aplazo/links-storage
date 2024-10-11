import { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <title>Liks Storage Homepage</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <link href="/static/style.css" rel="stylesheet" />
        <script src="/static/htmx.min.js" defer></script>
      </head>
      <body>{props.children}</body>
    </html>
  )
}
