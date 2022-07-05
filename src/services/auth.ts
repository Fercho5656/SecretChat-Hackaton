export const getAccessToken = async (token: string): Promise<string> => {
  const res = await fetch('http://localhost:3001/api/get-access-token', {
    headers: {
      authorization: token
    }
  })

  if (!res.ok) throw new Error('Failed to get access token')

  const { accessToken } = await res.json()
  return accessToken
}
