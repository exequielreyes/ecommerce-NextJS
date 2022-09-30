//nos permite procesar cualquier ruta que venga despues de api/auth

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,})
  ],
  secret: process.env.JWT_SECRET
});



// credentials pa despues
//   CredentialProviders({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text", placeholder: "prueba" },
//         password: {  label: "Password", type: "password" }
//       },
//      authorize: (credentials) => {
//         if (credentials.username === 'Prueba' && credentials.password === 'test')
//      }
//     }),
