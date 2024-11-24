import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [Google],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const dbUser = await prisma.user.findUnique({
                    where: {
                        email: user.email as string
                    }
                })

                if (dbUser) {
                    token.id = dbUser.id
                    token.role = dbUser.role
                    token.username = dbUser.username || ""
                }
            }

            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.role = token.role
                session.user.id = token.id
                session.user.username = token.username
            }

            return session;
        }
    }
})