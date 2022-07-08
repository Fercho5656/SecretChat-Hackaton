import supabase from "./supabase"

export const getAccessToken = async (token: string): Promise<string> => {
  const user = await supabase.auth.api.getUser(token)
  const identity = user.user?.user_metadata.name
  const res = await fetch('http://localhost:3001/api/get-access-token', {
    headers: {
      authorization: identity
    }
  })

  if (!res.ok) throw new Error('Failed to get access token')

  const { accessToken } = await res.json()
  return accessToken
}
