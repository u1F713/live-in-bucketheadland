import createServer from './factory'

const app = createServer()

app.all('/', () => 'The Embalmer 🤘')

export default app
