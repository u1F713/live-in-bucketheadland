import fastify, { FastifyInstance } from 'fastify'

const createServer = (): FastifyInstance => {
  return fastify({})
}

export default createServer
