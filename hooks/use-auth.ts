"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (provider: string, credentials?: Record<string, string>) => {
    if (provider === "credentials") {
      const result = await signIn(provider, {
        ...credentials,
        redirect: false,
      })
      return result
    } else {
      await signIn(provider, { callbackUrl: "/" })
    }
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push("/auth/signin")
  }

  const isAuthenticated = status === "authenticated"
  const isLoading = status === "loading"

  return {
    session,
    status,
    isAuthenticated,
    isLoading,
    login,
    logout,
  }
} 