import fastify from 'fastify'

const app = fastify({ logger: false })

app.all('/', () => 'The Embalmer 🤘')

void app.listen({ port: 8080 })
