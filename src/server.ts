import { env } from './env'
import { fastify } from 'fastify'
import { knex } from './database'
import crypto from 'node:crypto'

const app = fastify()

app.get('/hello', async () => {
  return await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transaction',
    amount: 2000,
  })
})

app.listen({
  port: env.PORT,
})
