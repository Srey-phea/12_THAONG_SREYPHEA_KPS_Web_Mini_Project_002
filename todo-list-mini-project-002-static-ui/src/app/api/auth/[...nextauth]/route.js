import { loginService } from "@/app/service/login.service";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      
      
      async authorize(data) {
        const userData = {
          email: data?.email,
          password: data?.password,
        };

        const userInfo = await loginService(userData)

         if (userInfo?.status === 400) {
          throw new Error(userInfo?.detail);
        }
        const { payload } = userInfo;
        return payload;
      },
    }),
    
  ],
  
  // Optional: Usage When Deployment   
  secret: process.env.NEXTAUTH_SECRET,
  
  // Optional
  session: {
    strategy: "jwt", // Adjust this based on your session strategy
  },
  
  // Custom Login page
     // pages: {
    //   signIn: "/login",
    // },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token = { ...token, ...user }; // Add the user details to the token
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token; // Add token details to session
        return session;
      },
    }
    
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };