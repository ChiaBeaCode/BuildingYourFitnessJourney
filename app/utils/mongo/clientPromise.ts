import { PrismaClient } from "@prisma/client"

if (!process.env.DATABASE_URL) {
  throw new Error('Invalid/Missing environment URL/URI')
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;












































// let prisma: PrismaClient
// if (process.env.NODE_ENV !== "production") {
//   console.log("======== ClientPromise: if block")
//   if (!global.prisma) {
//     console.log("======== ClientPromise: no global")
//     global.prisma = new PrismaClient()
//     console.log("======== ClientPromise: global created")
//   }
//   prisma = global.prisma
// } else {
//   console.log("======== ClientPromise: new connection?")
//   prisma = new PrismaClient();
// }
// export default prisma;