/* eslint-disable @typescript-eslint/no-explicit-any */
import nexiosInstance from "@/config/nexios.config";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ profile, account }: any) {
      try {
        console.log({ profile, account });

        if (!profile || !account) {
          return false;
        }

        if (account?.provider === "google") {
          const response: any = await nexiosInstance.post("/auth/login", {
            name: profile.name,
            email: profile.email,
            img: profile.picture,
          });

          if (
            response.data.data.accessToken ||
            response.data.data.refreshToken
          ) {
            cookies().set("accessToken", response.data.data.accessToken);
            cookies().set("refreshToken", response.data.data.refreshToken);
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET as string,
});

export { handler as GET, handler as POST };
