import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../utils/mongo/clientPromise";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    CredentialsProvider({
      name: "credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }
        try {
          const user = prisma.user.findFirst({
            where: {
              name: credentials.username,
            },
          });
          if (user) {
            return user;
          } else {
            throw new Error("User cannot be found");
          }
        } catch (error: any) {
          throw new Error(error);
        } finally {
          prisma.$disconnect();
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV !== "production",
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
