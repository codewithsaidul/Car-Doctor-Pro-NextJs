import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectDB } from "../../../../../lib/connectDB";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
      },
    },
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return "Provide Your Email & Password";
        }

        const db = await connectDB();
        const currentUser = await db
          .collection("user")
          .findOne({ email: email });
        if (!currentUser) {
          return "User not found";
        }

        const isValid = await bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!isValid) {
          return "Password is incorrect";
        }

        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;

        try {
          const newUser = { name, email, image };
          const db = await connectDB();
          const userCollection = db.collection("user");
          const existingUser = await userCollection.findOne({ email });

          if (!existingUser) {
            const result = await userCollection.insertOne(newUser);
            return result;
          } else {
            return user;
          }
        } catch (error) {
          return new Response(JSON.stringify({ message: error.message }), {
            status: 500,
          });
        }
      } else {
        return user;
      }
    },
  },
});

export { handler as GET, handler as POST };
