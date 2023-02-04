// https://www.mikealche.com/software-development/how-to-implement-authentication-in-next-js-without-third-party-libraries
import React from "react"
import { useUser } from "@auth0/nextjs-auth0"

export default function Component({ children, ...delegated }) {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (!user) <div>Please Login</div>

  return <div {...delegated}>{children}</div>
  return <pre>{user && user["https://www.bitboffins.io/jwt"]["x-allowed-roles"]}</pre>
}
