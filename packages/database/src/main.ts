import { PrismaClient } from '@prisma/client'

const client = (): PrismaClient => {
  return new PrismaClient()
}

export default client
