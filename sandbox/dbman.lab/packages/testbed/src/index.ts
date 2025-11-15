import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify'
// import { IncomingMessage, ServerResponse } from 'http'

const server: FastifyInstance = Fastify({
    logger: true, 
})

const opts: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          pong: {
            type: 'string'
          }
        }
      }
    }
  }
}

server.get('/ping', opts, async () => {
  return { pong: 'it worked!' }
})

const start = async () => {
  try {
    await server.listen({ port: 3333 })

    const address = server.server.address()
    const port = typeof address === 'string' ? address : address?.port
    server.log.info(`server is listening on ${port}`)    

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()