import { MongoClient } from 'mongodb'
import { PrismaClient } from '@prisma/client'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}

declare global {
  var prisma: PrismaClient

}