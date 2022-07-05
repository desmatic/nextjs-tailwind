// pages/api/auth/[...auth0].js
// https://auth0.github.io/nextjs-auth0/modules/handlers_callback.html

import { handleAuth, handleLogin } from '@auth0/nextjs-auth0'

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/dashboard",
    })
  },
})
