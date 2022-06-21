import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const ids = {
  clientId: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
    ? process.env.GOOGLE_CLIENT_SECRET
    : "",
};

console.log(ids);

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      ...ids,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "openid https://www.googleapis.com/auth/gmail.modify",
        },
      },
    }),
  ],
});
