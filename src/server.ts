import { fastify } from 'fastify'

const app = fastify()

app.get('/hello', () => {
  return 'Hello 1'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Running')
  })
