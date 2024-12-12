import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "../../../../../lib/connectDB"

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
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
        const currentUser = await db.collection("user").findOne({ email: email});
        if (!currentUser) {
          return "User not found";
        }

        const isValid = await bcrypt.compareSync(password, currentUser.password);
        if (!isValid) {
          return "Password is incorrect";
        }


        return currentUser
      },
    }),
  ],
  callbacks: {},
  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
