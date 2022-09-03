import fastify from 'fastify'

const app = fastify({ logger: false, http2: true })

app.all('/', () => 'The Embalmer 🤘')

void app.listen({ port: 8080 })
