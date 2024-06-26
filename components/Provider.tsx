"use client"
import { SessionProvider } from "next-auth/react"

function Provider({children, session} : {
  children  : any;
  session : any
}): JSX.Element {
  return (
    <SessionProvider session={session}>
      {children}
  </SessionProvider>
  )
}

export default Provider
