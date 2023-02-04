import React from "react"
import { useUser } from "@auth0/nextjs-auth0"

export default function Component() {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>
  if (!user) <div>Loading</div>
  return <pre>{user && user["https://www.bitboffins.io/jwt"]["x-allowed-roles"]}</pre>;
}
