import { AuthClass } from "@/action/auth.action";
import { isLogin } from "@/lib/utils";
import NextAuth, { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          const auth = new AuthClass();
          const response = await auth.login({
            email: credentials.email,
            password: credentials.password,
          });

          if (response.status !== 200) return null;

          const authData = response.data;

          if (!isLogin(authData)) return null;

          const user = {
            ...authData.user,
            id: String(authData.user.id),
            publicId: authData.user.publicId,
            accessToken: authData.accessToken,
          };

          cookies().set("jwt", authData.accessToken, { httpOnly: true });

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }): Promise<JWT> {
      const currentTime = Math.floor(Date.now() / 1000);

      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.publicId = user.publicId;
        token.accessToken = user.accessToken;
        token.expires = currentTime + 60 * 60;
      }

      const tokenExpires = token.expires as number;

      const timeRemaining = tokenExpires - currentTime;

      if (timeRemaining < 900 && timeRemaining > 0 && user) {
        try {
          const auth = new AuthClass();
          const response = await auth.validate({
            token: token.accessToken as string,
            id: +user.id,
          });

          token.accessToken = response.accessToken;
          token.expires = currentTime + 60 * 60;
        } catch (error) {
          console.log("Erro ao tentar revalidar o token", error);
        }
      }

      if (currentTime > tokenExpires) {
        return {
          ...token,
          accessToken: "",
          expires: 0,
        };
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<Session> {
      session.user.id = token.id as string;
      session.user.email = token.email;
      session.user.publicId = token.publicId as string;
      session.accessToken = token.accessToken as string;
      session.expires = new Date(
        (token.expires as number) * 1000,
      ).toISOString();
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
